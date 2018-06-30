module.exports = {
  apis: apis
};
const newData = require("./data/new_data");


// function apis(content) {
//   return Promise.all().then(function(resolve, reject) {

//   });
//   console.log("apis first content:", content);
//   const yelp = require('yelp-fusion');
//   const client = yelp.client("z7_PHslim4AHrYkDh5cLj5YOyxg41e9lal6ECSU7LcbLiwdKnH0TVgx9F9N0c_6NfTE29nJ7PI3LhtG0AzvlKSQ3XMKh3IQJ-XIFZ9-OxorjwfNYNv2EUBVJKz40W3Yx")
//   client.search({
//     term: content,
//     location: 'vancouver, bc'
//   }).then(response => {
//     console.log("yelp's result: ", response.jsonBody.businesses[0].name);
//     const result = response.jsonBody.businesses[0].name.toLowerCase();
//     console.log(content);
//     if (result.includes(content.toLowerCase())) {
//       category = "restaurants";
//       console.log("yelp gave a category: ", category)
//       return category;
//     } 
//   }).then(() => { movieapi(content) }
//   ).then(bookapi(content)
//   ).catch((e) => {
//     console.log(e);
//   }).then((category) => {
//     console.log("what is the category at 27, secrets: ", category)
//     console.log("time to import new_data");
//     return newData.newToDos(category);
//     console.log("secrets 30, newdata new todo: ", newData.newToDos);
//     console.log("secrets 31, newdata: ", newData)
//   }).then(() => {
//     console.log("success");
//   });
// }

function apis(content) {
  return Promise.all(movieapi(content), bookapi(content), restaurantsapi(content)).then(function (resolve, reject) {

  });
};
//   console.log("apis first content:", content);
//   const yelp = require('yelp-fusion');
//   const client = yelp.client("z7_PHslim4AHrYkDh5cLj5YOyxg41e9lal6ECSU7LcbLiwdKnH0TVgx9F9N0c_6NfTE29nJ7PI3LhtG0AzvlKSQ3XMKh3IQJ-XIFZ9-OxorjwfNYNv2EUBVJKz40W3Yx")
//   client.search({
//     term: content,
//     location: 'vancouver, bc'
//   }).then(response => {
//     console.log("yelp's result: ", response.jsonBody.businesses[0].name);
//     const result = response.jsonBody.businesses[0].name.toLowerCase();
//     console.log(content);
//     if (result.includes(content.toLowerCase())) {
//       category = "restaurants";
//       console.log("yelp gave a category: ", category)
//       return category;
//     } 
//   }).then(() => { movieapi(content) }
//   ).then(bookapi(content)
//   ).catch((e) => {
//     console.log(e);
//   }).then((category) => {
//     console.log("what is the category at 27, secrets: ", category)
//     console.log("time to import new_data");
//     return newData.newToDos(category);
//     console.log("secrets 30, newdata new todo: ", newData.newToDos);
//     console.log("secrets 31, newdata: ", newData)
//   }).then(() => {
//     console.log("success");
//   });
// }

//function restaurantapi(content) {
//  const yelp = require('yelp-fusion');
//  const client = yelp.client("z7_PHslim4AHrYkDh5cLj5YOyxg41e9lal6ECSU7LcbLiwdKnH0TVgx9F9N0c_6NfTE29nJ7PI3LhtG0AzvlKSQ3XMKh3IQJ-XIFZ9-OxorjwfNYNv2EUBVJKz40W3Yx")
//  return new Promise(function (resolve, reject) {
//    client.search(content(error, results) {
//      if (error) {
//        return reject(error);
//      }
//      if (result.includes(content.toLowerCase()) {
//          const result = response.jsonBody.businesses[0].name.toLowerCase();
//          term: content,
//            location: 'vancouver, bc'
//          return (resolve(true));
//        })
//    })
//  }).catch((e) => {
//    return false;
//  });
//
//
//  var request = require('request');
//
//  function movieapi(content) {
//    url = "http://www.omdbapi.com/?apikey=300871fb&t=" + content;
//    return new Promise(function (resolve, reject) {
//      request(url, (error, body) => {
//        if (error) {
//          return reject(error);
//        }
//        const obj = JSON.parse(body.body);
//        console.log("movieapi response: ", obj.Response);
//        if (obj.Response === "True") { //typeof response is string: true or false
//          //const category = "movies";
//          //console.log("movie's category: ", category);
//          return resolve(true);
//        }
//        //now it's time to compare and add to database
//      })
//    }).catch((e) => {
//      return false;
//    })
//  }
//
//  function bookapi(content) {
//    const books = require('google-books-catalogue-search');
//    return new Promise(function (resolve, reject) {
//      books.search(content, (error, results) => {
//        if (error) {
//          return reject(error);
//        }
//        const result = results[0].title.toLowerCase();
//        if (result.includes(content.toLowerCase())) {
//          return (resolve(true));
//        }
//      });
//    }).catch((e) => {
//      return false;
//    })
//
//  }
