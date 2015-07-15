describe('Configurator', function () {

    var configurator,
        queryEngine;

    beforeEach(function () {
        queryEngine = new bur.ConfigurationBasicQuery();

        sinon.stub(queryEngine, 'getAvailableType', function () {});

        configurator = new bur.Configurator(queryEngine);
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
});
