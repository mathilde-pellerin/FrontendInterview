bur.Configurator = (function () {

    function Configurator(queryEngine) {
        this.queryEngine = queryEngine;
    }

    Configurator.prototype.getAvailableType = function (type, bodyStyleId) {
        return this.queryEngine.getAvailableType(type, bodyStyleId);
    };

    return Configurator;

}());
