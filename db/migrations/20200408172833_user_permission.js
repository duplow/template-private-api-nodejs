exports.up = function (knex) {
  return knex.schema.createTable('user_permission', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('userId').notNullable();
    table.string('permission', 30).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user_permission');
};
