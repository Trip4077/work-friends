
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('schedule').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('schedule').insert([
        {
          id: 1, 
          user_id: 2,
          shift: 'night',
          weeks: [
            {
              monday: '3pm-12am',
              tuesday: '3pm-12am',
              wednesday: '5pm-12am',
              thursday: '5pm-12am',
              friday: 'off',
              saturday: '3pm-12am',
              sunday: 'off' 
            }
          ]
        }
      ]);
    });
};
