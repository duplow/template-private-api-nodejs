
exports.up = function (knex) {
  return knex.schema.createTable('bulk', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('userId').notNullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('bulk');
};
