exports.up = function (knex) {
  return knex.schema.createTable('upload', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.uuid('userId').notNullable();
    table.string('name', 250).notNullable();
    table.string('mime', 100).notNullable();
    table.integer('size').notNullable();
    table.string('uploadUrl').notNullable();

    table.string('bucketKey', 250).notNullable();
    table.boolean('wasUploaded').notNullable().defaultTo(false);
    table.boolean('wasMoved').notNullable().defaultTo(false);
    table.boolean('isCompleted').defaultTo(false);
    table.boolean('createdFileId').nullable();

    table.timestamp('expiresAt').notNullable(); // Upload expiration
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('upload');
};
