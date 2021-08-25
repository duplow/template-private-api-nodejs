exports.up = function (knex) {
  return knex.schema.createTable('team', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.string('name');
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deletedAt');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('team');
};
