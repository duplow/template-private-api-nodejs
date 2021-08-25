exports.up = function (knex) {
  return knex.schema.createTable('file', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('userId').notNullable();
    table.string('name').notNullable();
    table.integer('size').notNullable();
    table.string('mime').nullable();
    table.string('type').notNullable().defaultTo('document'); // image, document
    table.string('sha1', 60).notNullable();
    table.string('publicUrl').nullable();

    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('file');
};
