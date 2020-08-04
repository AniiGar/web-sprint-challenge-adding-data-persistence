
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, 
          name: 'eCommerce Info Website', 
          description: 'Informative site on eComm', 
          project_id: 1},
        {id: 2,
          name: 'YouTube', 
          description: 'Site with videos on everything', 
          project_id: 2},
        {id: 3,
          name: 'Lavendar Paint', 
          description: 'Paint for room accent wall', 
          project_id: 3}
      ]);
    });
};
