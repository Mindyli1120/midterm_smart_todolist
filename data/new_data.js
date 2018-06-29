module.exports = {
    newToDos: newToDos  
}


const apis = require("../secrets");
// function toDoLists(category, userId) {
//     userId = 1;
//    return knex("to_do_lists").insert({category: category, user_id: userId});
// }



function newToDos(content) {
    category = apis.apis(content) 
    console.log ("category at new_data.js: ", category);   
    // return knex.select("id").from("to_do_lists").where({category: category, user_id: 1})
    // .then((todoList) => {
    //     knex("to_dos").insert({title: content, list_id: todoList.id})
    // }).catch(e => {
    //     console.log(e);
    // });
    return;
}



