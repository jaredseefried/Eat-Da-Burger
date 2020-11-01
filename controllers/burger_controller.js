const express = require("express"); 
const burger = require("../models/burger");

const app = express();
const router = express.Router();

//GET ROUTE
router.get("/", (error, response) =>{
    burger.all((data)=>{
        const burgerObj = {
            burgers: data
        }
        console.log(burgerObj);
        response.render("index", burgerObj)
    })
})


module.exports = router