bur.ConfigurationState = (function () {

    function ConfigurationState() {
        this.history = [];
    }

    ConfigurationState.prototype.getPastStates = function () {
        return this.history;
    };

    ConfigurationState.prototype.update = function (configurationObj) {
        this.history.push(configurationObj);
    };

    return ConfigurationState;

}());
