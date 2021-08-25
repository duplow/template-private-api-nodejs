exports.up = function (knex) {
  return knex.raw('CREATE SEQUENCE IF NOT EXISTS "attribute_sequence" NO MINVALUE').then(() => {
    return knex.schema.createTable('attribute', function (table) {
      // Columns
      table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
      table.uuid('projectId').notNullable();
      table.string('name', 60).notNullable();
      table.string('format', 20).notNullable().defaultTo('text');
      table.integer('order').defaultTo(knex.raw("NEXTVAL('attribute_sequence')")); // Priority
      table.boolean('isSearchable').notNullable().defaultTo(true);
      table.boolean('isDisabled').notNullable().defaultTo(false);
      table.boolean('isPinned').notNullable().defaultTo(false);
      table.specificType('tags', 'varchar[]').nullable();
      table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updatedAt').nullable();
      table.timestamp('deletedAt').nullable();
    });
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('attribute').then(() => {
    return knex.raw('DROP SEQUENCE IF EXISTS "attribute_sequence"');
  });
};
