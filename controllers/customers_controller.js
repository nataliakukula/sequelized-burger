const express = require("express");
const customerRouter = express.Router();

// Imported model to use its sequelized functions:
const db = require("../models");

//Create customer
customerRouter.post("/api/customer", function (req, res) {

    let newCustomer = {
        customer_name: req.body.name,
        BurgerId: req.body.id
    };

    db.Customer.create(newCustomer).then(function (result) {

        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = customerRouter;