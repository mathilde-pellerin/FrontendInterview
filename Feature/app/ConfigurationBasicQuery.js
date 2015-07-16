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

  function isValidVehicleChange(vehicleObj, newValue, type, configurationObj) {
    return VEHICLE_CHANGE_PROPERTIES[type] && vehicleObj !== configurationObj && vehicleObj[type] === newValue;
  }

  function getVehicleWithMatchingProperties(vehicleObj, newValue, type, configurationObj) {
    var matchingVehicleObj;

    if (isValidVehicleChange(vehicleObj, newValue, type, configurationObj)) {
      matchingVehicleObj = vehicleObj;
    } else if (!VEHICLE_CHANGE_PROPERTIES[type]) {
      matchingVehicleObj = vehicleObj;
      matchingVehicleObj[type] = newValue;
    }

    return matchingVehicleObj;
  }

  ConfigurationBasicQuery.prototype.getInitialConfiguration = function () {
    return this.vehicleData.mscs[0];
  };

  ConfigurationBasicQuery.prototype.getAvailableTypes = function (type, bodyStyleId) {
    var items = [];

    this.vehicleData.mscs.forEach(function (vehicleObj) {
      if (vehicleObj.bodyStyle === bodyStyleId) {
        bur.Utils.addUniqueToArray(vehicleObj[type], items);
      }
    });

    return items;
  };

  ConfigurationBasicQuery.prototype.getConfigurationWith = function (newValue, type, configurationObj) {
    var i,
        matchingVehicleObj,
        numberOfVehicles = this.vehicleData.mscs.length;

    for (i = 0; i < numberOfVehicles; i += 1) {
      matchingVehicleObj = getVehicleWithMatchingProperties(
          bur.Utils.shallowCloneObject(this.vehicleData.mscs[i]),
          newValue, type, configurationObj
      );

      if (matchingVehicleObj) {
        return matchingVehicleObj;
      }
    }
  };

  return ConfigurationBasicQuery;
}());
