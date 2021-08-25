exports.up = function (knex) {
  return knex.schema.createTable('service', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('markerId').nullable();
    table.uuid('cardId').nullable();
    table.string('trackCode', 100).comment('SKU ID').nullable();
    table.string('name', 60).notNullable();
    table.decimal('latitude', 12, 9); // Previously (10, 7)
    table.decimal('longitude', 12, 9); // Previously (10, 7)
    table.specificType('tags', 'varchar[]').nullable();

    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt');
    table.timestamp('deletedAt');

    table.timestamp('lastPaintedAt');
    table.timestamp('lastIndexedAt'); // lastDigestedAt

    // Constraints
    table.unique(['projectId', 'trackCode']);

    // About SKUs: [https://www.ideris.com.br/blog/o-que-e-sku/]
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('service');
};
