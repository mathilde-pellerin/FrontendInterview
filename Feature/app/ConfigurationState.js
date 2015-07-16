bur.ConfigurationState = (function () {

    function ConfigurationState() {
        this.history = [];
    }

    ConfigurationState.prototype.getPastStates = function () {
        return this.history;
    };

    ConfigurationState.prototype.update = function (configurationObj) {
        bur.Utils.addUniqueToArray(configurationObj, this.history);
    };

    return ConfigurationState;

}());
