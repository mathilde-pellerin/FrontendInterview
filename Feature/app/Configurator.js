bur.Configurator = (function () {

    function Configurator(queryEngine, stateEngine) {
        this.queryEngine = queryEngine;
        this.stateEngine = stateEngine;

        startConfiguration(this);
    }

    function startConfiguration(self) {
        self.stateEngine.update(self.queryEngine.getInitialConfiguration());
    }

    Configurator.prototype.getAvailableType = function (type, bodyStyleId) {
        return this.queryEngine.getAvailableType(type, bodyStyleId);
    };

    Configurator.prototype.getConfiguration = function () {
        return this.stateEngine.getCurrent();
    };

    return Configurator;

}());
