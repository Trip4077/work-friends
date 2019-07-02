exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        //ID
        tbl.increments();

        //Strings
        tbl.string('first_name').notNullable();
        tbl.string('last_name').notNullable();
        tbl.string('occupation').notNullable();
        tbl.string('password').notNullable();
        tbl.string('email').notNullable().unique();

        //Ints
        tbl.int('phone');
        tbl.int('zip').notNullable();
        tbl.int('age').notNullable();

        //Array
        tbl.specificType('friends', 'INT[]');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};