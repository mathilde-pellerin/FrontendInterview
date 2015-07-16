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
    });

    describe('retrieving a configuration', function () {
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

        it('should return the last configuration as the current state', function () {
            var config1 = {},
                config2 = {};

            stateEngine.update(config1);
            stateEngine.update(config2);

            expect(stateEngine.getCurrent()).toEqual(config2);
        });

        it('should return the first configuration as the initial state', function () {
            var config1 = {},
                config2 = {};

            stateEngine.update(config1);
            stateEngine.update(config2);

            expect(stateEngine.getInitial()).toEqual(config1);
        });
    });

    describe('restoring a configuration', function () {
        var config1 = {},
            config2 = {},
            config3 = {};

        beforeEach(function () {
            stateEngine.update(config1);
            stateEngine.update(config2);
            stateEngine.update(config3);
        });

        it('should NOT reset the state if told to reset to the current state', function() {
            stateEngine.resetTo(config3);

            expect(stateEngine.getPastStates().length).toEqual(3);
            expect(stateEngine.getCurrent()).toEqual(config3);
        });

        it('should reset to the initial state if told to reset to config1', function() {
            stateEngine.resetTo(config1);

            expect(stateEngine.getPastStates().length).toEqual(1);
            expect(stateEngine.getCurrent()).toEqual(config1);
        });

        it('should reset to the second state if told to reset to config2', function() {
            stateEngine.resetTo(config2);

            expect(stateEngine.getPastStates().length).toEqual(2);
            expect(stateEngine.getCurrent()).toEqual(config2);
        });
    });
});
