(function (global) {

    global.testHelpers = {
        vehicles: {
            '111': { msc: '111', bodyStyle: '3door', grade: 'basic', engine: '1petrol', color: 'red', trim: 'cloth' },
            '112': { msc: '112', bodyStyle: '3door', grade: 'mid', engine: '1petrol', color: 'red', trim: 'cloth' },
            '113': { msc: '113', bodyStyle: '3door', grade: 'high', engine: '2petrol', color: 'red', trim: 'leather' },
            '114': { msc: '114', bodyStyle: '3door', grade: 'sport', engine: '3petrol', color: 'blue', trim: 'leather' },
            '121': { msc: '121', bodyStyle: '5door', grade: 'mid', engine: '1petrol', color: 'blue', trim: 'cloth' },
            '122': { msc: '122', bodyStyle: '5door', grade: 'high', engine: '2petrol', color: 'blue', trim: 'leather' },
            '123': { msc: '123', bodyStyle: '5door', grade: 'sport', engine: '4petrol', color: 'blue', trim: 'leather' },
            '221': { msc: '221', bodyStyle: 'wag', grade: 'mid', engine: '1petrol', color: 'white', trim: 'cloth' },
            '222': { msc: '222', bodyStyle: 'wag', grade: 'high', engine: '2petrol', color: 'white', trim: 'leather' }
        },
        colors: {
            red: {
                id: 'red',
                title: 'Ruby Red',
                mustExclude: [
                    { grade: 'sport' },
                    { bodyStyle: 'wag' }
                ]
            },
            blue: {
                id: 'blue',
                title: 'Sapphire Blue',
                mustExclude: [
                    { grade: 'wag' }
                ]
            },
            white: {
                id: 'white',
                title: 'Frozen White'
            }
        },
        trims: {
            cloth: {
                id: 'cloth',
                title: 'Checked Cloth',
                mustExclude: [
                    { grade: 'sport' }
                ]
            },
            leather: {
                id: 'leather',
                title: 'Leather',
                mustExclude: [
                    { grade: 'basic' }
                ]
            }
        }
    };

}(window));
