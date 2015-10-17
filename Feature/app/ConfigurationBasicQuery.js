bur.ConfigurationBasicQuery = (function () {

  var VEHICLE_CHANGE_PROPERTIES = {
    msc: true,
    bodyStyle: true,
    grade: true,
    engine: true
  };

  var VEHICLE_ALLOWED_PROPERTIES = {
    color: 'colors',
    trim: 'trims'
  };

  function ConfigurationBasicQuery(vehicleData) {
    this.vehicleData = vehicleData;
  }

  function isValidVehicleChange(vehicleObj, newValueId, typeId, configurationObj) {
    return VEHICLE_CHANGE_PROPERTIES[typeId] && vehicleObj !== configurationObj && vehicleObj[typeId] === newValueId;
  }

  function getVehicleWithMatchingProperties(vehicleObj, newValueId, typeId, configurationObj) {
    var matchingVehicleObj;

    if (isValidVehicleChange(vehicleObj, newValueId, typeId, configurationObj)) {
      matchingVehicleObj = vehicleObj;
    } else if (!VEHICLE_CHANGE_PROPERTIES[typeId]) {
      matchingVehicleObj = vehicleObj;
      matchingVehicleObj[typeId] = newValueId;
    }

    return matchingVehicleObj;
  }

  function getIndexOfMsc(mscStr, vehicles) {
    var i,
        numberOfVehicles = vehicles.length;

    for (i = 0; i < numberOfVehicles; i += 1) {
      if (mscStr === vehicles[i].msc) {
        return i;
      }
    }
  }

  function getVehiclesToBeSearched(vehicles, configurationObj, isAllowed) {
    var numberOfVehicles = vehicles.length,
        clonedVehicles = vehicles.slice(0),
        startingIndex = (isAllowed) ? getIndexOfMsc(configurationObj.msc, clonedVehicles) : 0,
        startingVehicles = clonedVehicles.splice(startingIndex, numberOfVehicles - startingIndex);

    return startingVehicles.concat(clonedVehicles);
  }

  function isConfigurationAllowed(newValueId, typeId, configurationObj, vehicleData){
    var i,
        excludeProperty,
        excludedKey,
        excludeProperties = (VEHICLE_ALLOWED_PROPERTIES[typeId]) ? vehicleData[VEHICLE_ALLOWED_PROPERTIES[typeId]][newValueId].mustExclude : [],
        configurationIsAllowed = true;

    for(i = 0; i < excludeProperties.length; i += 1){
      excludeProperty = excludeProperties[i];
      excludedKey = Object.keys(excludeProperty)[0];
      
      if(configurationObj.hasOwnProperty(excludedKey) && configurationObj[excludedKey] === excludeProperty[excludedKey]){
        configurationIsAllowed = false;
        break;
      }
    }
     
    return configurationIsAllowed;
  }

  ConfigurationBasicQuery.prototype.getInitialConfiguration = function () {
    return this.vehicleData.mscs[0];
  };

  ConfigurationBasicQuery.prototype.getAvailableTypes = function (typeId, bodyStyleId) {
    var items = [];

    this.vehicleData.mscs.forEach(function (vehicleObj) {
      if (vehicleObj.bodyStyle === bodyStyleId) {
        bur.Utils.addUniqueToArray(vehicleObj[typeId], items);
      }
    });

    return items;
  };

  ConfigurationBasicQuery.prototype.getConfigurationWith = function (newValueId, typeId, configurationObj) {
    var i,
        matchingVehicleObj,
        isAllowed = isConfigurationAllowed(newValueId, typeId, configurationObj, this.vehicleData),
        sortedVehicles = getVehiclesToBeSearched(this.vehicleData.mscs, configurationObj, isAllowed),
        numberOfVehicles = sortedVehicles.length;

    for (i = 0; i < numberOfVehicles; i += 1) {
      matchingVehicleObj = getVehicleWithMatchingProperties(
          bur.Utils.shallowCloneObject(sortedVehicles[i]),
          newValueId, typeId, configurationObj
      );

      if (matchingVehicleObj) {
        return matchingVehicleObj;
      }
    }
  };

  return ConfigurationBasicQuery;
}());
