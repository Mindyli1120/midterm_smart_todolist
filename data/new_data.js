require('dotenv').config();

module.exports = {
    newToDos: newToDos  
}

function newToDos(content, category) {
    console.log("category at new_data 8:", category);
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
    
    console.log("category at new_data 29: ", category);
    return (knex("to_do_lists")
            .insert({category: category, user_id: 1})
            .returning('id')
            .then((id) => {
                const numId = Number(id);
            return knex("to_dos").insert({name: content, status: true, list_id: numId}).returning('id')
            }).catch((e) =>{
                console.log(e);
            }).finally(function() {
                knex.destroy();
            })
        );
}



