bur.ConfigurationState = (function () {

    function ConfigurationState() {
        this.history = [];
    }

    ConfigurationState.prototype.getPastStates = function () {
        return this.history;
    };

    ConfigurationState.prototype.getCurrent = function () {
        return this.history[this.history.length -1];
    };

    ConfigurationState.prototype.getInitial = function () {
        return this.history[0];
    };

    ConfigurationState.prototype.update = function (configurationObj) {
        bur.Utils.addUniqueToArray(configurationObj, this.history);
    };

    return ConfigurationState;

}());
