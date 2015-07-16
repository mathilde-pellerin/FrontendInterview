describe('ConfigurationState', function () {

    var stateEngine;

    beforeEach(function () {
        stateEngine = new bur.ConfigurationState();
    });

    describe('storing a configuration', function () {
        it('should have no configurations when initialized', function () {
            expect(stateEngine.getPastStates().length).toEqual(0);
        });

        it('should have one configuration when one has been saved', function () {
            var config = {};

            stateEngine.update(config);

            expect(stateEngine.getPastStates().length).toEqual(1);
            expect(stateEngine.getPastStates()[0]).toEqual(config);
        });

        it('should only have 1 state if the same configuration is added twice', function () {
            var config = {};

            stateEngine.update(config);
            stateEngine.update(config);

            expect(stateEngine.getPastStates().length).toEqual(1);
            expect(stateEngine.getPastStates()[0]).toEqual(config);
        });

        it('should return the undefined for the current state if none have been set', function () {
            expect(stateEngine.getCurrent()).not.toBeDefined();
        });

        it('should return the only configuration as the current state', function () {
            var config = {};

            stateEngine.update(config);

            expect(stateEngine.getCurrent()).toEqual(config);
        });
    });
});
