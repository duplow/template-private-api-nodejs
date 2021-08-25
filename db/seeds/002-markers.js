const randomColor = require('./utils/random-color.js');

exports.seed = function(knex) {
  return knex('marker').del()
    .then(function () {
      var items = [];

      for(var i = 0; i < 10; i++) {
        items.push({
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: `Marker random ${i + 1}`,
          shape: 'circle',
          fillColor: randomColor().toLowerCase(),
          borderColor: 'ffffff',
          isDisabled: false
        });
      }

      return knex('marker').insert([
        {
          id: '57eb4bc0-9957-483b-82a8-be5f5c8140d2',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Marker fixed 1',
          shape: 'circle',
          fillColor: 'ff00ff',
          borderColor: 'ffffff',
          isDisabled: false
        },
        {
          id: '9d7aa8f1-817b-43b8-8552-d4ff1013bf63',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Marker fixed 2',
          shape: 'circle',
          fillColor: '00ffff',
          borderColor: 'ffffff',
          isDisabled: false
        },
        {
          id: 'b6fc1d02-392b-4182-8285-9d606a186b73',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Marker fixed 3',
          shape: 'circle',
          fillColor: 'ffff00',
          borderColor: 'ffffff',
          isDisabled: false
        },
        ...items
      ]);
    });
};