bur.ConfigurationBasicQuery = (function () {

    function ConfigurationBasicQuery(vehicleData) {
        this.vehicleData = vehicleData;
    }

    ConfigurationBasicQuery.prototype.getInitialConfiguration = function () {
        return this.vehicleData[0];
    };

    ConfigurationBasicQuery.prototype.getAvailableType = function (type, bodyStyleId) {
        var items = [];

        this.vehicleData.forEach(function (vehicleObj) {
            if (vehicleObj.bodyStyle === bodyStyleId) {
                bur.Utils.addUniqueToArray(vehicleObj[type], items);
            }
        });

        return items;
    };

    ConfigurationBasicQuery.prototype.getConfigurationWith = function (newValue, type, configurationObj) {
        var i,
            vehicleObj,
            numberOfVehicles = this.vehicleData.length;

        for (i = 0; i < numberOfVehicles; i += 1) {
            vehicleObj = this.vehicleData[i];

            if (vehicleObj !== configurationObj && vehicleObj[type] === newValue) {
                return vehicleObj;
            }
        }
    };

    return ConfigurationBasicQuery;

}());
