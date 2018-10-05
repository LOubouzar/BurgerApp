//Express Config
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

//serving public files
app.use(express.static("public"));

//set up for body parse as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Express-handlebars setup
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routing config from the controller.js
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//server listen config
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
