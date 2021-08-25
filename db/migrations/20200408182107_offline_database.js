
exports.up = function (knex) {
  return knex.schema.createTable('offline_database', function (table) {
    // Columns
    table.uuid('id').unique().primary().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('projectId').notNullable();
    table.string('fileKey', 255).nullable(); // S3 Bucket Key
    table.integer('fileSize').nullable();
    //table.uuid('requestedBy').nullable();
    table.uuid('requestId').nullable(); // offline_database_request.id
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('offline_database');
};
