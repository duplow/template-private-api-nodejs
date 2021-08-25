exports.up = function (knex) {
  return knex.schema.createTable('invitation', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('teamId').notNullable();
    table.uuid('requesterUserId').notNullable();
    table.string('email', 60).notNullable();
    table.string('code', 30).unique().notNullable();
    table.boolean('isUsed').notNullable().defaultTo(false);

    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('invitation');
};
