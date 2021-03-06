// Sets up the Express App
// =============================================================
var path = require("path");
var express = require("express");
// var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var friends = require("./app/data/friends");

// Routes
// =============================================================
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });

//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
