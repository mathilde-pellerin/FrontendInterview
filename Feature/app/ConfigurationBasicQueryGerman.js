bur.ConfigurationBasicQueryGerman = (function () {

  function ConfigurationBasicQueryGerman(vehicleData) {
    bur.ConfigurationBasicQuery.call(this, vehicleData);
  }

  ConfigurationBasicQueryGerman.prototype = Object.create(bur.ConfigurationBasicQuery.prototype);

  ConfigurationBasicQueryGerman.prototype.getVehiclesToBeSearched = function(vehicles, configurationObj, isAllowed) {
    var numberOfVehicles = vehicles.length,
        clonedVehicles = vehicles.slice(0),
        mscIndex = this.getIndexOfMsc(configurationObj.msc, clonedVehicles),
        startingIndex = (isAllowed) ? mscIndex : mscIndex - 1,
        startingVehicles = clonedVehicles.splice(startingIndex, numberOfVehicles - startingIndex);

    return startingVehicles.concat(clonedVehicles);
  };

  return ConfigurationBasicQueryGerman;
}());