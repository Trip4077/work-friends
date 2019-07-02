exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          first_name: 'Dr.',
          last_name: 'Who',
          occupation: 'The Doctor',
          email: 'tardis@gmail.com',
          password: 'password',
          phone: 5555555555,
          zip: 12345,
          age: 120,
          friends: [ 2 ],
        },

        {
          id: 2, 
          first_name: 'Amelia',
          last_name: 'Pond',
          occupation: 'Side Kick',
          email: 'redhead@gmail.com',
          password: 'password',
          phone: 5555555555,
          zip: 12345,
          age: 23,
          friends: [ 1 ],
        },
      ]);
    });
};