const orm = require("../config/orm.js");

console.log(orm);

const burger = {
    selectAll: function(cb) {
        orm.selectAll(function(result) {
            cb(result);
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, function(result) {
            cb(result);
        });
    }
}

// $(".add-burger").on("click", function() {
//     console.log("testing the button");
// })

module.exports = burger;
