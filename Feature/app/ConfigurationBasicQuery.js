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

    return ConfigurationBasicQuery;

}());
