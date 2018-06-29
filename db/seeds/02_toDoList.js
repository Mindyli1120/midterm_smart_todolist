exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
        // Inserts seed entries
        knex('to_do_lists').insert({category: 'movies', user_id: '1'}),
        knex('to_do_lists').insert({category: 'restaurants', user_id: '1'}),
        knex('to_do_lists').insert({category: 'books', user_id: '1'}),
        knex('to_do_lists').insert({category: 'products', user_id: '1'}),
      ]);
    
};
