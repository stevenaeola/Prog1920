var express = require("express");
var app = express();
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

app.get("/potatoes", function (request, response){
    const key = request.query.key;
    for(let i = 0; i<recipes.length; i++){
        if(recipes[i].title == key){
            response.send(recipes[i].href);
        }
    }
});


app.listen(8090);

