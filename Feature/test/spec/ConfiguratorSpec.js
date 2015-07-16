describe('Configurator', function () {

    var configurator,
        queryEngine,
        stateEngine;

    beforeEach(function () {
        queryEngine = new bur.ConfigurationBasicQuery();
        stateEngine = new bur.ConfigurationState();

        sinon.stub(queryEngine, 'getAvailableType', function () {});

        configurator = new bur.Configurator(queryEngine, stateEngine);
    });

    afterEach(function () {
        queryEngine.getAvailableType.restore();
    });

    it('should call getAvailableType on the query engine', function () {
        var queryCall,
            type = 'grade',
            bodyStyleId = '3door';

        configurator.getAvailableType(type, bodyStyleId);

        queryCall = queryEngine.getAvailableType.firstCall;

        expect(queryCall.args[0]).toEqual('grade');
        expect(queryCall.args[1]).toEqual('3door');
    });

    describe('configuration changes', function () {
        var initialConfig = testHelpers.vehicles[0];

        beforeEach(function () {
            sinon.stub(queryEngine, 'getInitialConfiguration', function () {
                return initialConfig;
            });
        });

        afterEach(function () {
            queryEngine.getInitialConfiguration.restore();
        });

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
    });
});
