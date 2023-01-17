// app.post('/addUser', function (req, res) {
//   // First read existing users.
//   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//      data = JSON.parse( data );
//      data["user3"] = user["user3"];
//     //  console.log( data );
//      res.end( JSON.stringify(data));
//   });
// })

// app.get('/listUsers', function (req, res) {  //link: http://127.0.0.1:8081/listUsers
//   fs.readFile( "users.json", 'utf8', function (err, data) {
//      // console.log( data );
//      res.end( data );
//   });
// })

// listAutos = [
//   {
//     "id": 1,
//     "marke" : "Mercedes",
//     "standort": "Umgebung Mannheim",
//     "preis" : "100€ - 200€",
//     "verfügbar" : true,
//     "autoname" : "Mercedes-Benz C 63 AMG",
//     "autotags" : ["Limousine","350kW", "Benzin", "5 Sitzplätze", "Automatik", "175€ pro Tag"],
//     "url" : "../img/auto1.jpg",
//     "isfavorite" : false
//  },
//  {
//   "id": 2,
//   "marke" : "Mercedes",
//   "standort": "Umgebung Stuttgart",
//   "preis" : "200€ - 500€",
//   "verfügbar" : true,
//   "autoname" : "Mercedes-Benz S 400 d 4MATIC",
//   "autotags" : ["Limousine","243kW", "Diesel", "5 Sitzplätze", "Automatik", "250€ pro Tag"],
//   "url" : "../img/auto2.jpg",
//   "isfavorite" : false
// },
// {
//   "id": 3,
//   "marke" : "BMW",
//   "standort": "Umgebung Hamburg",
//   "preis" : "50€ - 100€",
//   "verfügbar" : true,
//   "autoname" : "BMW 318D",
//   "autotags" : ["Limousine","110kW", "Diesel", "5 Sitzplätze", "Automatik", "75€ pro Tag"],
//   "url" : "../img/auto3.jpg",
//   "isfavorite" : false
// }
// ]

// app.get('/listAutos', function (req, res) {  //link: http://127.0.0.1:8081/listAutos
//    res.send(listAutos);
    
// })

// app.get('/listAutos/:id', function (req, res) {  //link: http://127.0.0.1:8081/listAutos
//   let auto = listAutos.find(c => c.id === parseInt(req.params.id))
// if (!auto) res.status(404).send("Geht nicht Bruder");
// res.send(auto)
// })

var express = require('express');
var app = express();
app.use(express.json())
var fs = require("fs");
const port = 8000

let name = Name.getValue()

var user = {
  "user3" : {
    "id": 3,
    "name" :  name,
    "vorname":  Vorname.getValue(),
    "strasse" :  Strasse.getValue(),
    "hausnummer" :  Hausnr.getValue(),
    "Wohnort" :  Wohnort.getValue(),
    "plz" :  Postleitzahl.getValue(),
    "land" :  Land.getValue(),
    "führerschein" :  Führerschein.getValue(),
    "email" :  Email.getValue(),
    "passwort" :  Passwort.getValue(),
  }
}



app.get("/api/listUsers", (req, res) =>{  http://127.0.0.1:8000/api/listUsers
  res.send(user)
} )

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})


    
var user = {
    "user3" : {
    "id": 3,
    "name" :  Name.getValue(),
    "vorname":  Vorname.getValue(),
    "strasse" :  Strasse.getValue(),
    "hausnummer" :  Hausnr.getValue(),
    "Wohnort" :  Wohnort.getValue(),
    "plz" :  Postleitzahl.getValue(),
    "land" :  Land.getValue(),
    "führerschein" :  Führerschein.getValue(),
    "email" :  Email.getValue(),
     "passwort" :  Passwort.getValue(),
      }
    }
    
    
    
app.get("/api/listUsers", (req, res) =>{  http://127.0.0.1:8000/api/listUsers
    res.send(user)
} )
    


// "name" : localStorage.getItem("storeName"),
//     "vorname": localStorage.getItem("storeVorname"),
//     "strasse" : localStorage.getItem("storeStrasse"),
//     "hausnummer" : localStorage.getItem("storeHausnr"),
//     "Wohnort" : localStorage.getItem("storeWohnort"),
//     "plz" : localStorage.getItem("storePostleitzahl"),
//     "land" : localStorage.getItem("storeFührerschein"),
//     "führerschein" : localStorage.getItem("storeFührerschein"),
//     "email" : localStorage.getItem("storeReqEmail"),
//     "passwort" : localStorage.getItem("storeRegPasswort")


// app.post('/listAutos', function (req, res) {
//    let auto = {
//     "id": 4,
//     marke : req.body.marke,
//     "standort": "Umgebung Dortmund",
//     "preis" : "200€ - 500€",
//     "verfügbar" : true,
//     "autoname" : "BMW i4 M50",
//     "autotags" : ["Limousine","400kW", "Vollelektrisch", "5 Sitzplätze", "Automatik", "275€ pro Tag"],
//     "url" : "../img/auto4.jpg",
//     "isfavorite" : false
//  };
//  listAutos.push(auto);
//  res.send(course);
//   })

