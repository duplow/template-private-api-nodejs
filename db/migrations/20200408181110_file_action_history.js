exports.up = function (knex) {
  return knex.schema.createTable('file_action_history', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('userId').notNullable();
    table.uuid('fileId').notNullable();
    table.string('action').notNullable();
    table.string('context').nullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('file_action_history');
};
