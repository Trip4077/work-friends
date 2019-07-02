exports.up = function(knex) {
  return knex.schema.createTable('schedule', tbl => {
    //IDs
    tbl.increments();
    tbl.integer('user_id').notNullable();

    //String
    tbl.string('shift').notNullable();

    //Array
    tbl.specificType('weeks', 'array');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists();
};