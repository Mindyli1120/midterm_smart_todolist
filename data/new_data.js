require('dotenv').config();

module.exports = {
    newToDos: newToDos  
}




function newToDos(content) {
    
    const knex = require('knex')({
        client: 'pg',
        connection: {
            host     : process.env.DB_HOST,
            user     : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB_NAME,
            port     : process.env.DB_PORT,
            ssl      : process.env.DB_SSL
        },
    });
    
    // knex("to_do_lists")
    // .insert({category: content, user_id: 1})
    // .returning('id')
    // .then((id) => {
    //   return knex("to_dos").insert({name: content, list_id: id}).then(() => {
    //       // do something
    //   })
    // })

    return (knex("to_do_lists")
            .insert({category: content, user_id: 1})
            .returning('id')
            .then((id) => {
            return knex("to_dos").insert({name: content, list_id: id}).returning('id')
            }));
    
    
    // .catch((e) => {
    //     console.log(e)
    // });

    // category = apis.apis(content)
    // console.log ("category at new_data.js: ", category);   
    // return knex.select("id").from("to_do_lists").where({category: category, user_id: 1})
    // .then((todoList) => {
    //     knex("to_dos").insert({title: content, list_id: todoList.id})
    // }).catch(e => {
    //     console.log(e);
    // });
    // return;
}



