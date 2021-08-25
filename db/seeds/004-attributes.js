
exports.seed = function(knex) {
  return knex('attribute').del()
    .then(function () {
      return knex('attribute').insert([
        {
          id: 'f47a31b5-d339-4a25-adad-cafc73bd92f5',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Etapa (campo)'
        },
        {
          id: 'fc16e966-5e79-457a-b4e3-b1fc092fd0d4',
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Tipo (campo)'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Campo 1'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Campo 2'
        },
        {
          projectId: '2d7232f6-44b1-48bf-b1d9-3b188961ee45',
          name: 'Campo 3'          
        }
      ]);
    });
};