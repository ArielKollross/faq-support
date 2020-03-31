
exports.up = function(knex) {
  return knex.schema
    .createTable('questions', function (table) {
        table.increments('questionId').primaty()
        table.string('category').notNullable()
        table.string('question').notNullable()
        table.string('answer').notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('questions')
};
