// Part #1 Point 3. Change filename homerouter.js to homeroute.js

const express = require('express'); 
const homeRouter = express.Router();

homeRouter.get('/',function(req,res){

    res.render('home',{});
    
})







module.exports = homeRouter;