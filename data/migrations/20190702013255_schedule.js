exports.up = function(knex) {
  return knex.schema.createTable('schedule', tbl => {
    //IDs
    tbl.increments();
    tbl.integer('user_id').notNullable();

    //String
    tbl.string('shift').notNullable();

    tbl.string('monday').notNullable();
    tbl.string('tuesday').notNullable();
    tbl.string('wednesday').notNullable();
    tbl.string('thursday').notNullable();
    tbl.string('friday').notNullable();
    tbl.string('saturday').notNullable();
    tbl.string('sunday').notNullable();

    tbl.string('start_date').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists();
};