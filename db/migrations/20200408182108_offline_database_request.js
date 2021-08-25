
exports.up = function (knex) {
  return knex.schema.createTable('offline_database_request', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('requestedBy').nullable();
    table.timestamp('executedAt').nullable();
    table.timestamp('cancelledAt').nullable();
    table.timestamp('completedAt').nullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('offline_database_request');
};
