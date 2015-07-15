bur.ConfigurationBasicQuery = (function () {

    function ConfigurationBasicQuery(vehicleData) {
        this.vehicleData = vehicleData;
    }

    function addUniqueToArray(value, array) {
        if (array.indexOf(value) === -1) {
            array.push(value);
        }
    }

    ConfigurationBasicQuery.prototype.getAvailableType = function (type, bodyStyleId) {
        var self = this,
            mscCodes = Object.keys(this.vehicleData),
            items = [];

        mscCodes.forEach(function (mscCode) {
            var vehicle = self.vehicleData[mscCode];

            if (vehicle.bodyStyle === bodyStyleId) {
                addUniqueToArray(vehicle[type], items);
            }
        });

        return items;
    };

    return ConfigurationBasicQuery;

}());
