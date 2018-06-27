
exports.up = function(knex, Promise) {
  return knex.schema.createTable('to_do_lists', function(table) {
      table.increments();
      table.string('category');
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('to_do_lists'); 
};
