module.exports = {
  apis: apis
};
const newData = require("./data/new_data");

const resultArr = [false, false, false];
function apis(content) {
  console.log("apis first content:", content);
  const yelp = require('yelp-fusion');
  const client = yelp.client("z7_PHslim4AHrYkDh5cLj5YOyxg41e9lal6ECSU7LcbLiwdKnH0TVgx9F9N0c_6NfTE29nJ7PI3LhtG0AzvlKSQ3XMKh3IQJ-XIFZ9-OxorjwfNYNv2EUBVJKz40W3Yx")
  client.search({
    term: content,
    location: 'vancouver, bc'
  }).then(response => {
    console.log("yelp's result: ", response.jsonBody.businesses[0].name);
    const result = response.jsonBody.businesses[0].name.toLowerCase();
    console.log(content);
    if (result.includes(content.toLowerCase())) {
      resultArr[2] = true;
      return resultArr;
    } else {
      return resultArr;
    }
  }).then(movieapi(content)
  ).then(bookapi(content)
  ).then(() => {
    let category;
    if (resultArr[0] === true) {
      category = "movies";
    } else if (resultArr[1] === true) {
      category = "books";
    } else if (resultArr[2] === true) {
      category = "restaurants";
    } else {
      category = "products";
    }
    return newData.newToDos(content, category);
  }).then(() => {
    console.log("success");
  }).catch((e) => {
    console.log(e);
  });
}

var request = require('request');
function movieapi(content) {
  url= "http://www.omdbapi.com/?apikey=300871fb&t=" + content;
    request(url, (error, body) => {
      console.log("movies error: ", error);
      const obj = JSON.parse(body.body);
      const result = obj.response;
      if (result === "True") {  //typeof response is string: true or false
        resultArr[0] = true;
        return resultArr;
      } else {
        return resultArr;
      }
      //now it's time to compare and add to database
  });
}

function bookapi(content) {
  const books = require('google-books-catalogue-search');
    books.search(content, (error, results) => {
      if (error) {
        console.error(error);
      }
      const result = results[0].title.toLowerCase();
      if (result.includes(content.toLowerCase())) {
        resultArr[1] = true;
        return resultArr;
      } else {
        return resultArr;
      }
  });
}

