var express = require('express');
var app = express();
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

app.get("/listUsers/id", (req, res) =>{
  res.send(req.params.id)
} )


var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})