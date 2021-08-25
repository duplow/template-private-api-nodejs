
exports.up = function (knex) {
  return knex.schema.createTable('offline_database_request_history', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('requestId').notNullable();
    table.string('eventType').notNullable();
    table.string('eventContext').nullable();
    table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('offline_database_request_history');
};
