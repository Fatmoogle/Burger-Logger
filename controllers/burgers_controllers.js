const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        console.log({ burgers: data });
        res.render("index", { burgers: data });
    });
});

router.post("/", function(req, res) {
    burger.insertOne([req.body.burger_name, req.body.devoured], function(data) {
        console.log(data);
        res.render("index", data);
        res.redirect("/");
    });
});

module.exports = router;

