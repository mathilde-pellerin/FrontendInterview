describe('ConfigurationBasicQuery', function () {

    var queryEngine;

    beforeEach(function () {
        queryEngine = new bur.ConfigurationBasicQuery(testHelpers.vehicles);
    });

    describe('querying', function () {
        it('should return me all available grades for bodyStyle 3door', function () {
            var grades = queryEngine.getAvailableType('grade', '3door');

            expect(grades[0]).toEqual('basic');
            expect(grades[1]).toEqual('mid');
            expect(grades[2]).toEqual('high');
            expect(grades[3]).toEqual('sport');
        });

        it('should return me all available grades for bodyStyle 5door', function () {
            var grades = queryEngine.getAvailableType('grade', '5door');

            expect(grades.length).toEqual(3);
            expect(grades[0]).toEqual('mid');
            expect(grades[1]).toEqual('high');
            expect(grades[2]).toEqual('sport');
        });

        it('should return me all available engines for bodyStyle wag', function () {
            var engines = queryEngine.getAvailableType('engine', 'wag');

            expect(engines.length).toEqual(2);
            expect(engines[0]).toEqual('1petrol');
            expect(engines[1]).toEqual('2petrol');
        });

        it('should return the first vehicle in the list 111 as the initial configuration', function () {
            expect(queryEngine.getInitialConfiguration().msc).toEqual('111');
        })
    });
});
