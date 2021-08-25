const randomColor = require('./utils/random-color.js');

exports.seed = function(knex) {
  return knex('card').del()
    .then(function () {
      var items = [];

      for(var i = 0; i < 10; i++) {
        var color = randomColor().toLowerCase();
        items.push({
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: `Card random ${i + 1}`,
          icon: 'question',
          accentColor: color,
          backgroundColor: color,
          foregroundColor: 'ffffff',
          isDisabled: false
        });
      }

      return knex('card').insert([
        {
          id: '091a3f74-4c27-4763-949e-79e417849e87',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Card fixed 1',
          icon: 'question',
          accentColor: '006699',
          backgroundColor: '006699',
          foregroundColor: 'ffffff',
          isDisabled: false
        },
        {
          id: '3729e6e8-75f4-4d40-a250-3278869f4004',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Card fixed 2',
          icon: 'question',
          accentColor: '006699',
          backgroundColor: '006699',
          foregroundColor: 'ffffff',
          isDisabled: false
        },
        {
          id: 'e5ae2cee-eb08-47a3-8bbf-58f85793aabf',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Card fixed 3',
          icon: 'question',
          accentColor: '006699',
          backgroundColor: '006699',
          foregroundColor: 'ffffff',
          isDisabled: false
        },
        ...items
      ]);
    });
};