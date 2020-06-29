
exports.up = function(knex) {
  return knex.schema.createTable('user',tb =>{
    tb.increments()
    tb.text('name')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user')
}
