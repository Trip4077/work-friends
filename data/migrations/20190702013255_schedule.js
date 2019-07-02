exports.up = function(knex) {
  return knex.schema.createTable('schedule', tbl => {
    //ID
    tbl.increments();

    //String
    tbl.string('shift').notNullable();

    //Array
    tbl.specificType('weeks', 'array');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists();
};