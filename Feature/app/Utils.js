bur.Utils = (function () {

    function Utils(queryEngine) {}

    Utils.addUniqueToArray = function (value, array) {
        if (array.indexOf(value) === -1) {
            array.push(value);
        }
    };

    return Utils;

}());
