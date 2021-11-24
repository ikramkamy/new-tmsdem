
const mongoose = require("mongoose");

const CubageSchema = new mongoose.Schema(
  {
    name:{
          type:String,
     },
     pnam:{
            type:String,
     },
     cathegorie:{
        type:String,
      },
     volume:{
         type:Number,
         
      }

  } 
);



const Cubage=mongoose.model('cubage', CubageSchema);
module.exports=Cubage;
