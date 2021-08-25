exports.up = function (knex) {
  return knex.schema.createTable('service_marker_history', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('serviceId').notNullable();
    table.uuid('markerId').notNullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('service_marker_history');
};
