bur.Utils = (function () {

    function Utils(queryEngine) {}

    Utils.addUniqueToArray = function (value, array) {
        if (array.indexOf(value) === -1) {
            array.push(value);
        }
    };

    Utils.shallowCloneObject = function (obj) {
        var property,
            cloneObj = {};

        for (property in obj) {
            if (obj.hasOwnProperty(property)) {
                cloneObj[property] = obj[property];
            }
        }

        return cloneObj;
    };

    return Utils;

}());
