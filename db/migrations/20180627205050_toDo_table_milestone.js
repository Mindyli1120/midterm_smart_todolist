
exports.up = function(knex, Promise) {
    return knex.schema.createTable('to_dos', function(table) {
        table.increments();
        table.string('name');
        table.string('description');
        table.boolean('status');
        table.integer('list_id').unsigned()
        table.foreign('list_id').references('to_do_lists.id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('to_dos');
};
