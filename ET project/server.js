const express = require("express");
const fs = require("fs");
const path= require ("path");
const db = require("./db");
const server = express();

let indexhtml = fs.readFileSync(path.resolve("./index.html"), "utf8");

let db=[];


//Routes
server.get("/",(req, res, next)=>{
    res.setHeader('Content-Type', 'text/html')
    res.status(202).send(indexhtml)

});
server.post("/saveexpense",(req,res)=>{

        db.push({expense});
    
    res.json(db);
});
server.listen(3040);