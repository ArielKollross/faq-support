
exports.up = function(knex) {
  return knex.schema
    .createTable('clientQuestion', function(table) {
        table.increments('id')
        table.string('name').notNullable()
        table.string('loginCode')
        table.string('email').notNullable()
        table.string('ask').notNullable()
    })
};

exports.down = function(knex) {
  knex.schema.dropTable('clientQuestion')
};
