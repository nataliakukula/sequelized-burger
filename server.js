const express = require("express");
//Set up express app
const PORT = process.env.PORT || 3000;
const app = express();

// Requiring our models for syncing
const db = require("./models");

// Serve static content for the app from the "public" directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");

app.use(routes);

//// Syncing sequelize models and then starting our Express app
//For testing change force to false!
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on http://localhost:" + PORT);
    });
});