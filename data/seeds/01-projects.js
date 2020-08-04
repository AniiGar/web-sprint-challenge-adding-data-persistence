
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, 
          name: 'Start Online Business', 
          description: 'Online sales of some sort', 
          completed: false},
        {id: 2, 
          name: 'Train Dog to Tricks', 
          description: 'Figure out how to tain on dog tricks', 
          completed: false},
        {id: 3, 
          name: 'Complete Baby Room', 
          description: 'Get room ready for new baby', 
          completed: false}
      ]);
    });
};
