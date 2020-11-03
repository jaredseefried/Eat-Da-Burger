const orm = require("../config/orm")

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    }
}
module.exports = burger;