
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1,          
          name: 'Identify type of Business to start', 
          description: 'Market research on best online businesses', 
          project_id: 1,
          notes: 'Research points to health and beauty',
          completed: true},
        {id: 2,
          name: 'Watch dog training videos', 
          description: 'Find video online', 
          project_id: 1,
          notes: 'Youtube is great resource',
          completed: false},
        {id: 3,
          name: 'Clear room for baby', 
          description: 'Remove all stored items from room', 
          project_id: 3,
          notes: '',
          completed: true}
      ]);
    });
};
