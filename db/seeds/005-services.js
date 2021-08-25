const randomLatLng = require('./utils/random-position.js');

const BASE_LAT = -23.6353129;
const BASE_LNG = -46.4822603;

const padNumber = (number) => {
  return number.toString().padStart(3, '0');
}

exports.seed = function(knex) {
  return knex('service').del()
    .then(function () {
      var items = [];

      for(var i = 0; i < 100; i++) {
        var fakeGeo = randomLatLng(BASE_LAT, BASE_LNG);

        items.push({
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          markerId: knex.raw(`(SELECT "id" FROM "marker" ORDER BY RANDOM() LIMIT 1)`), // TODO: Filter project
          cardId: knex.raw(`(SELECT "id" FROM "card" ORDER BY RANDOM() LIMIT 1)`), // TODO: Filter project
          name: `Service ${padNumber(i + 2)}`,
          trackCode: `service_rand_${i + 2}`,
          latitude: fakeGeo.lat,
          longitude: fakeGeo.lng
        });
      }

      return knex('service').insert([
        {
          id: '21476146-cae8-4c0c-830f-a20062af1f47',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          markerId: '57eb4bc0-9957-483b-82a8-be5f5c8140d2',
          cardId: '091a3f74-4c27-4763-949e-79e417849e87',
          name: 'Service 001',
          trackCode: 'service_1',
          latitude: BASE_LAT,
          longitude: BASE_LNG
        },
        ...items
      ]);
    });
};