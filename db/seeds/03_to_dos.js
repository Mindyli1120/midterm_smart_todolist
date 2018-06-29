exports.seed = function(knex, Promise) {

  return knex.select("id", "category").from("to_do_lists").where("user_id", 1)
  .then((toDoLists) => {
    console.log("category data: ", toDoLists);
    const categoryIds = {};
    toDoLists.forEach((toDoList) => {
      categoryIds[toDoList.category] = toDoLists.id;
    //   switch (toDoList.category) {
    //     case 'movies':
    //       categoryIds.movies = toDoLists.id
    //     case 'restaurants':

    //     case 'books':

    //     case 'products':
    //   }
    // })
    })
    return categoryIds;
  })
  .then((categoryIds) => {
    return Promise.all([
      // Inserts seed entries
      knex('to_dos').insert({name: 'cook dinner', description: 'cook dinner for tonight', status: true, list_id: categoryIds.restaurants}),
      knex('to_dos').insert({name: 'star wars', description: 'watch star wars', status: true, list_id: categoryIds.movies}),
      knex('to_dos').insert({name: 'water bottle', description: 'get a new water bottle', status: true, list_id: categoryIds.products})
    ]);
  })

  
};
