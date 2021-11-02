const express= require('express');
const mongoose =require('mongoose');
const app=express();
mongoose.connect('mongodb://localhost:3001/tmsdem')
const db= mongoose.connection;
db.on('error',(error)=>console.error(error))
db.once('la base de donnée pour TMSDEM est connecté',()=>console.log("connexion réussite tmsdem"))
app.listen(3001,()=>console.log("serveur express a démarer")) 