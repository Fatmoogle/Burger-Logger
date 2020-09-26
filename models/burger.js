const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll(function(result) {
            cb(result);
        });
    },
    insertOne: function(burger, cb) {
        orm.insertOne(burger, function(result) {
            cb(result);
        });
    }
}

module.exports = burger;
