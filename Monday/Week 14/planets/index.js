const express = require("express");
const app = express();

const planets = [{name: 'mercury'},
                 {name: 'venus'},
                 {name: 'earth'},
                 {name: 'mars'},
                 {name: 'jupiter'}
                ];

app.get("/", function (req, resp){
    resp.send("Hello");
});

app.get("/planet/:pnum", function (req, resp){
    const pnum = req.params.pnum;
    resp.send(planets[pnum - 1].name);
});



app.listen(8080);
