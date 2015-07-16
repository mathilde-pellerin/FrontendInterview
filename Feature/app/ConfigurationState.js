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

    ConfigurationState.prototype.resetTo = function (configurationObj) {
        var configIndex = this.history.indexOf(configurationObj);

        if (configIndex > -1 && this.getCurrent() !== configurationObj) {
            this.history = this.history.splice(0, configIndex + 1);
        }
    };

    return ConfigurationState;

}());
