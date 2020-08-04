exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .notNullable()
            .unique();
        tbl.text('description', 128);
        tbl.boolean('completed')
            .defaultTo(false)    
  })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .notNullable();
        tbl.text('description', 128);
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.text('notes', 254);
        tbl.boolean('completed')
            .defaultTo(false);
  })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .notNullable();
        tbl.text('description', 254);
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
