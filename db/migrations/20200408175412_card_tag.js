exports.up = function (knex) {
  return knex.schema.createTable('card_tag', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('cardId').notNullable();
    table.string('name', 60).notNullable();
    table.string('value', 60).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('card_tag');
};
