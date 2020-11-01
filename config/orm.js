// Dependencies
const connection = require("./connection.js")

const orm = {
    selectAll: function (tableInput, colToSearch, valOfCol){
        const query = "SELECT * FROM ?? where ?? = ?";
        connection.query(query, [tableInput, colToSearch, valOfCol], (error, result) =>{
            if (error) throw error;
            console.log(result);
        })

    }
}



// Export ORM
module.exports = orm