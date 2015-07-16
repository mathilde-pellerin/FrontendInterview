bur.ConfigurationBasicQuery = (function () {

    function ConfigurationBasicQuery(vehicleData) {
        this.vehicleData = vehicleData;
    }

    ConfigurationBasicQuery.prototype.getAvailableType = function (type, bodyStyleId) {
        var self = this,
            mscCodes = Object.keys(this.vehicleData),
            items = [];

        mscCodes.forEach(function (mscCode) {
            var vehicle = self.vehicleData[mscCode];

            if (vehicle.bodyStyle === bodyStyleId) {
                bur.Utils.addUniqueToArray(vehicle[type], items);
            }
        });

        return items;
    };

    return ConfigurationBasicQuery;

}());
