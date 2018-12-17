require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
//Set up express app
const PORT = process.env.PORT || 3000;
const app = express();

// Requiring our models for syncing
const db = require("./models");

// Serve static content for the app from the "public" directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import burgerRoutes and customerRoutes give the server access to them.
const burgerRoutes = require("./controllers/burgers_controller");
const customerRoutes = require("./controllers/customers_controller");

app.use(burgerRoutes);
app.use(customerRoutes);

//// Syncing sequelize models and then starting our Express app
//When testing change force to false!
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on http://localhost:" + PORT);
    });
});