exports.up = function (knex) {
  return knex.schema.createTable('card', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.string('name', 60).notNullable();
    table.string('icon', 20).notNullable().defaultTo('none');
    table.string('accentColor', 6).notNullable();
    table.string('backgroundColor', 6).notNullable();
    table.string('foregroundColor', 6).notNullable();
    table.boolean('isDisabled').notNullable().defaultTo(false);
    table.specificType('tags', 'varchar[]').nullable();
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('card');
};
