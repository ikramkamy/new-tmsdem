const express= require('express');
const mongoose =require('mongoose');
const db=require('./config/db');
const app=express();
const userRouter=require('./routes/UserRoutes');
const CommandeRoutes=require('./routes/CommandeRoutes');
const env=require('dotenv');
const bodyParser = require("body-parser");
const produitRoutes=require('./routes/ProduitsRoutes');
const cubageRoutes=require('./routes/CubageRoutes');
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(userRouter);
app.use(CommandeRoutes);
app.use(produitRoutes);
app.use(cubageRoutes);
env.config();
app.listen(3001,()=>console.log("serveur express a démarer")) 