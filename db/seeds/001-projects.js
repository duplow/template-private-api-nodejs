
exports.seed = function(knex) {
  return knex('project').del()
    .then(function () {
      return knex('project').insert([
        {
          id: "2d7232f6-44b1-48bf-b1d9-3b188961ee45",
          ownerId: "1290408f-da1f-4b0b-a77e-d795087bfb83",
          name: "Project 1"
        },
        {
          ownerId: "1290408f-da1f-4b0b-a77e-d795087bfb83",
          name: "Project 2"
        },
        {
          ownerId: "1290408f-da1f-4b0b-a77e-d795087bfb83",
          name: "Project 3"
        }
      ]);
    });
};