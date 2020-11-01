// Dependencies
const express = require("express");
const handlebars = require("express-handlebars")
const orm = require("./config/orm.js");
const PORT = process.env.PORT || 3000;

const app = express();

// Get files in the public folder 
app.use(express.static('public'));

// Set up express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burger_controller");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});