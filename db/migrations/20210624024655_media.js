exports.up = function (knex) {
  return knex.schema.createTable('media', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.string('type').notNullable().defaultTo('file'); // file, folder
    table.string('fullpath').notNullable();
    table.integer('sizeInBytes').notNullable();
    table.string('mime').nullable();

    // TODO: MARK FOR DELETION
    //table.string('sha1', 60).notNullable(); // Fingerprint
    //table.string('publicUrl').nullable();

    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('media');
};
