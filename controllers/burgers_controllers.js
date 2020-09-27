const express = require("express");
const burger = require("../models/burger.js")

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(result) {
        console.log({ burgers: result });
        res.render("index", { burgers: result });
    });
});

router.post("/api/burgers", (req, res) => {
    const burgerName = req.body.burger_name;
    burger.insertOne(burgerName, function(result) {
        res.json({ id: result.insertId });
    });

});

router.put("/api/burgers/:id", function(req, res) {
    const id = parseInt(req.params.id);
    burger.updateOne(id, function(result) {
        if(result.changedRows === 0) {
            return res.status(404).end
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

