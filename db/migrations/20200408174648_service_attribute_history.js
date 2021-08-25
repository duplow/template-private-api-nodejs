exports.up = function (knex) {
  return knex.schema.createTable('service_attribute_history', function (table) { // service_attribute_change_history
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('serviceId').notNullable();
    table.uuid('attributeId').notNullable();
    table.string('attributeValue', 255).nullable();
    table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('service_attribute_history');
};
