
exports.up = function(knex) {
  return knex.schema
    .createTable('questions', function (table) {
        table.increments('questionId')
        
        table.string('category').notNullable()
        table.text('question').notNullable()
        table.text('answer').notNullable()

        //relacionamento
        table.string('owner_question')
        //referenciamento
        table.foreign('owner_question').references('userId').inTable('users')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('questions')
};
