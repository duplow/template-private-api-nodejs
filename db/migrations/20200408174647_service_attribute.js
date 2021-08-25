exports.up = function (knex) {
  return knex.schema.createTable('service_attribute', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('serviceId').notNullable();
    table.uuid('attributeId').notNullable();
    table.string('attributeValue', 255).nullable();
    table.timestamp('lastUpdatedAt').notNullable().defaultTo(knex.fn.now());

    // Constraints
    table.unique(['projectId', 'serviceId', 'attributeId']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('service_attribute');
};
