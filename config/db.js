const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/tmsdem",{},(err)=>{
if(err)
console.log("ERROR IN CONNECTION WITH SERVER IS",err)
else 
console.log("tout est bien base de de donnée connectée pour TMSDEM")
})
module.exports=mongoose.connection;