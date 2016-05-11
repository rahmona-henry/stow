
exports.up = function(knex, Promise) {

  console.log('create table')

  return knex.schema.createTableIfNotExists('users', function(table) {
      table.increments()
      table.integer('user_ID')
      table.string('username')
      table.string('email')
      table.string('password')
      table.integer('rating')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(function () {
    console.log('users table was dropped')
  })
};
