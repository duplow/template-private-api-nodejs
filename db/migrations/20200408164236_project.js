exports.up = function (knex) {
  return knex.schema.createTable('project', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('ownerId').notNullable();
    table.string('name', 60).notNullable();
    table.specificType('tags', 'varchar[]').nullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deletedAt');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('project');
};
