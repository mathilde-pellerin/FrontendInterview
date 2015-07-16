(function (global) {

  global.testHelpers = {
    vehicle: {
      mscs: [
        {msc: '111', bodyStyle: '3door', grade: 'basic', engine: '1petrol', color: 'red', trim: 'cloth'},
        {msc: '112', bodyStyle: '3door', grade: 'mid', engine: '1petrol', color: 'red', trim: 'cloth'},
        {msc: '113', bodyStyle: '3door', grade: 'high', engine: '2petrol', color: 'red', trim: 'leather'},
        {msc: '114', bodyStyle: '3door', grade: 'sport', engine: '3petrol', color: 'blue', trim: 'leather'},
        {msc: '121', bodyStyle: '5door', grade: 'mid', engine: '1petrol', color: 'blue', trim: 'cloth'},
        {msc: '122', bodyStyle: '5door', grade: 'high', engine: '2petrol', color: 'blue', trim: 'leather'},
        {msc: '123', bodyStyle: '5door', grade: 'sport', engine: '4petrol', color: 'blue', trim: 'leather'},
        {msc: '221', bodyStyle: 'wag', grade: 'mid', engine: '1petrol', color: 'white', trim: 'cloth'},
        {msc: '222', bodyStyle: 'wag', grade: 'high', engine: '2petrol', color: 'white', trim: 'leather'}
      ],
      colors: {
        red: {
          id: 'red',
          title: 'Ruby Red',
          mustExclude: [
            {grade: 'sport'},
            {bodyStyle: 'wag'}
          ]
        },
        blue: {
          id: 'blue',
          title: 'Sapphire Blue',
          mustExclude: [
            {grade: 'wag'}
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
            {grade: 'sport'}
          ]
        },
        leather: {
          id: 'leather',
          title: 'Leather',
          mustExclude: [
            {grade: 'basic'}
          ]
        }
      }
    }
  };

}(window));
