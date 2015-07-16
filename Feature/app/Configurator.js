bur.Configurator = (function () {

  function Configurator(queryEngine, stateEngine) {
    this.queryEngine = queryEngine;
    this.stateEngine = stateEngine;

    startConfiguration(this);
  }

  function startConfiguration(self) {
    self.stateEngine.update(self.queryEngine.getInitialConfiguration());
  }

  Configurator.prototype.getAvailableTypes = function (typeId, bodyStyleId) {
    return this.queryEngine.getAvailableTypes(typeId, bodyStyleId);
  };

  Configurator.prototype.getConfiguration = function () {
    return this.stateEngine.getCurrent();
  };

  Configurator.prototype.applyItem = function (itemId, typeId) {
    this.stateEngine.update(
        this.queryEngine.getConfigurationWith(itemId, typeId, this.stateEngine.getCurrent())
    );
  };

  return Configurator;

}());
