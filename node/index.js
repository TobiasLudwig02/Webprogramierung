var express = require('express');
var app = express();
app.use(express.json())
var fs = require("fs");
const port = 8081

var user = {
  "user3" : {
    "id": 3,
    "name" : "Test2",
    "vorname": "Test3",
    "strasse" : "Test4",
    "hausnummer" : "Tes2t",
    "Wohnort" : "Tes2t",
    "plz" : "Te2st",
    "land" : "Te1st",
    "führerschein" : "Test2",
    "email" : "Tes23t@web.de",
    "passwort" : "Test23321123"
  }
}

// app.post('/addUser', function (req, res) {
//   // First read existing users.
//   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//      data = JSON.parse( data );
//      data["user3"] = user["user3"];
//     //  console.log( data );
//      res.end( JSON.stringify(data));
//   });
// })

app.get('/listUsers', function (req, res) {  //link: http://127.0.0.1:8081/listUsers
  fs.readFile( "users.json", 'utf8', function (err, data) {
     // console.log( data );
     res.end( data );
  });
})

listAutos = [
  {
    "id": 1,
    "marke" : "Mercedes",
    "standort": "Umgebung Mannheim",
    "preis" : "100€ - 200€",
    "verfügbar" : true,
    "autoname" : "Mercedes-Benz C 63 AMG",
    "autotags" : ["Limousine","350kW", "Benzin", "5 Sitzplätze", "Automatik", "175€ pro Tag"],
    "url" : "../img/auto1.jpg",
    "isfavorite" : false
 },
 {
  "id": 2,
  "marke" : "Mercedes",
  "standort": "Umgebung Stuttgart",
  "preis" : "200€ - 500€",
  "verfügbar" : true,
  "autoname" : "Mercedes-Benz S 400 d 4MATIC",
  "autotags" : ["Limousine","243kW", "Diesel", "5 Sitzplätze", "Automatik", "250€ pro Tag"],
  "url" : "../img/auto2.jpg",
  "isfavorite" : false
},
{
  "id": 3,
  "marke" : "BMW",
  "standort": "Umgebung Hamburg",
  "preis" : "50€ - 100€",
  "verfügbar" : true,
  "autoname" : "BMW 318D",
  "autotags" : ["Limousine","110kW", "Diesel", "5 Sitzplätze", "Automatik", "75€ pro Tag"],
  "url" : "../img/auto3.jpg",
  "isfavorite" : false
}
]

app.get('/listAutos', function (req, res) {  //link: http://127.0.0.1:8081/listAutos
   res.send(listAutos);
    
})

app.get('/listAutos/:id', function (req, res) {  //link: http://127.0.0.1:8081/listAutos
  let auto = listAutos.find(c => c.id === parseInt(req.params.id))
if (!auto) res.status(404).send("Geht nicht Bruder");
res.send(auto)
})

app.get("/listUsers/id", (req, res) =>{
  res.send(req.params.id)
} )


app.post('/listAutos', function (req, res) {
   let auto = {
    "id": 4,
    marke : req.body.marke,
    "standort": "Umgebung Dortmund",
    "preis" : "200€ - 500€",
    "verfügbar" : true,
    "autoname" : "BMW i4 M50",
    "autotags" : ["Limousine","400kW", "Vollelektrisch", "5 Sitzplätze", "Automatik", "275€ pro Tag"],
    "url" : "../img/auto4.jpg",
    "isfavorite" : false
 };
 listAutos.push(auto);
 res.send(course);
  })



var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})