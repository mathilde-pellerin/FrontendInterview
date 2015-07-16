describe('Configurator', function () {
  var configurator,
      queryEngine,
      stateEngine,
      initialConfig = testHelpers.vehicle.mscs[0];

  beforeEach(function () {
    queryEngine = new bur.ConfigurationBasicQuery();
    stateEngine = new bur.ConfigurationState();

    sinon.stub(queryEngine, 'getAvailableTypes', function () {});
    sinon.stub(queryEngine, 'getInitialConfiguration', function () {
      return initialConfig;
    });

    configurator = new bur.Configurator(queryEngine, stateEngine);
  });

  afterEach(function () {
    queryEngine.getAvailableTypes.restore();
    queryEngine.getInitialConfiguration.restore();
  });

  it('should call getAvailableTypes on the query engine', function () {
    var queryCall,
        type = 'grade',
        bodyStyleId = '3door';

    configurator.getAvailableTypes(type, bodyStyleId);

    queryCall = queryEngine.getAvailableTypes.firstCall;

    expect(queryCall.args[0]).toEqual('grade');
    expect(queryCall.args[1]).toEqual('3door');
  });

  describe('configuration changes', function () {
    it('should the first vehicle in the list as the initial state', function () {
      var currentConfig;

      sinon.stub(stateEngine, 'getCurrent', function () {
        return initialConfig;
      });

      currentConfig = configurator.getConfiguration();

      expect(currentConfig.msc).toEqual('111');
      expect(currentConfig.bodyStyle).toEqual('3door');
      expect(currentConfig.grade).toEqual('basic');
      expect(currentConfig.engine).toEqual('1petrol');
      expect(currentConfig.color).toEqual('red');
      expect(currentConfig.trim).toEqual('cloth');

      stateEngine.getCurrent.restore();
    });

    it('should request a new configuration and set the result configuration to the state engine', function () {
      var newConfig = {},
          currentConfig = {},
          value = 'white',
          type = 'color';

      sinon.stub(queryEngine, 'getConfigurationWith', function () {
        return newConfig;
      });
      sinon.stub(stateEngine, 'getCurrent', function () {
        return currentConfig;
      });
      sinon.stub(stateEngine, 'update', function () {});

      configurator.applyItem(value, type);

      expect(queryEngine.getConfigurationWith.firstCall.args[0]).toEqual(value);
      expect(queryEngine.getConfigurationWith.firstCall.args[1]).toEqual(type);
      expect(queryEngine.getConfigurationWith.firstCall.args[2]).toEqual(currentConfig);
      expect(stateEngine.update.firstCall.args[0]).toEqual(newConfig);

      queryEngine.getConfigurationWith.restore();
      stateEngine.getCurrent.restore();
      stateEngine.update.restore();
    });
  });
});
