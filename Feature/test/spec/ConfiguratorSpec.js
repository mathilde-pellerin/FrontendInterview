describe('Configurator', function () {

    var configurator;

    beforeEach(function () {
        configurator = new bur.Configurator(testHelpers.vehicles);
    });

    it('should return me all available grades for bodyStyle 3door', function () {
        var grades = configurator.getAvailableType('grade', '3door');

        expect(grades[0]).toEqual('basic');
        expect(grades[1]).toEqual('mid');
        expect(grades[2]).toEqual('high');
        expect(grades[3]).toEqual('sport');
    });

    it('should return me all available grades for bodyStyle 5door', function () {
        var grades = configurator.getAvailableType('grade', '5door');

        expect(grades.length).toEqual(3);
        expect(grades[0]).toEqual('mid');
        expect(grades[1]).toEqual('high');
        expect(grades[2]).toEqual('sport');
    });

});
