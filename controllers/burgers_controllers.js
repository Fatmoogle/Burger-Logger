const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObj = { burgers: data };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/", function(req, res) {
    burger.insertOne([req.body.burger_name, req.body.devoured], function(data) {
        console.log(data);
        res.redirect("/");
    });
});

module.exports = router;

