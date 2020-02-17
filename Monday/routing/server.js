var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var fs = require('fs');

var recipes = require("./recipes.json");



app.get("/", function (request, response){
    response.send(recipes);
});

app.get("/wave/:who", function (request, response){
    const who = request.params.who;
    response.send("Hello to " +who);
});

app.get("/shout", function (request, response){
    const who = request.query.who;
    response.send("HELLO TO " +who);
});

app.post("/shout", function (request, response){
    const who = request.query.who;
    response.send("HELLO TO " +who);
});

app.post("/new", function (request, response){
    const title = request.body.title;
    const url = request.body.url;
    const newRecipe = {"title": title,
                       "href": url};
    recipes.push(newRecipe);
    const json = JSON.stringify(recipes);
    fs.writeFile('recipes.json', json, 'utf8', console.log);

    response.send(`Added recipe ${title} ${url}`);
});


app.get("/potatoes", function (request, response){
    const key = request.query.key;
    for(let i = 0; i<recipes.length; i++){
        if(recipes[i].title == key){
            response.send(recipes[i].href);
        }
    }
});

app.get("/search", function (request, response){
    const keyword = request.query.keyword;
    console.log(`Searching for ${keyword}`);
    for(let i = 0; i<recipes.length; i++){
        console.log("Comparing with " + recipes[i].title);
        if(recipes[i].title.toLowerCase().includes(keyword.toLowerCase())){
            console.log("found");
            response.send(recipes[i].href);
            console.log("Sent " + recipes[i].href);
        }
    }

});

app.listen(8090);

