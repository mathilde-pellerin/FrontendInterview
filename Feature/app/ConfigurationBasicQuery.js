bur.ConfigurationBasicQuery = (function () {

  var VEHICLE_CHANGE_PROPERTIES = {
    msc: true,
    bodyStyle: true,
    grade: true,
    engine: true
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
        numberOfVehicles = this.vehicleData.mscs.length;

    for (i = 0; i < numberOfVehicles; i += 1) {
      matchingVehicleObj = getVehicleWithMatchingProperties(
          bur.Utils.shallowCloneObject(this.vehicleData.mscs[i]),
          newValueId, typeId, configurationObj
      );

      if (matchingVehicleObj) {
        return matchingVehicleObj;
      }
    }
  };

  return ConfigurationBasicQuery;
}());
