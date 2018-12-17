const express = require("express");
const burgerRouter = express.Router();

// Imported model to use its sequelized functions:
const db = require("../models");

//Show all burgers and their associated customers
burgerRouter.get("/", function (req, res) {

    db.Burger.findAll({
        // Order results by name of burger
        order: [['burger_name', 'ASC']],
        //JOIN with Customer table
        include: [db.Customer]

    }).then(function (data) {

        let hbsObject = {
            burger: data
        };

        res.render("index", hbsObject);

    });
});

//Create burger
burgerRouter.post("/api/burger", function (req, res) {

    let newBurger = {
        burger_name: req.body.name,
    };

    db.Burger.create(newBurger).then(function (result) {

        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

//Update burger - move to the other side
burgerRouter.put("/api/burger/:id", function (req, res) {

    let status = Boolean(req.body.devoured);

    db.Burger.update(
        {
            devoured: status
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function (result) {
            if (result.changedRows === 0) {
                // If no rows were added, then the ID must not exist, so 404
                return res.status(404).end();
            }

            res.status(200).end();
        });

});

module.exports = burgerRouter;