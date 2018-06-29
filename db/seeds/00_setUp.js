
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('to_dos').del()
  .then(() => knex('to_do_lists').del())
  .then(() => knex('users').del())
  
};
