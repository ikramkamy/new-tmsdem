const Cubage=require('../models/Cubage');

 

exports.createcubage =  (req, res) => {
  
     console.log('ROUTE SUCCEED')
     const cube=new Cubage({
      name:req.body.name,
      valume:req.body.volume,
      pname:req.body.pname,
      cathegorie:req.body.cathegorie,
    
 });
 
 cube.save((error, cube)=>{
     if (error) {
       
         return res.status(400).json({
           message: (error),
         });
       }
       if (cube) {
         
         const {name,cathegorie, pname,cathegorie} = cube;
         return res.status(201).json({
           
            cube: {name,  valume,pname,  cathegorie},
         });
       } 
 })
  }


exports.getCubage =(req,res)=>{
Cubage.find().then((data) => {
 
    res.json(data)
    console.log("FETCH GOUT SUCCED")
    })
    .catch((err) => {
      console.log("FETCH FAILED",err)
      res.json({
        err: err,
        message: "Une erreur c'est produite",
      });
    });
}
 //#update a note
 exports.EditCubage= (req, res) => {
      const noteId = req.params._id;
      const name = req.body.name;
      Cubage.findByIdAndUpdate({ _id:req.params._id},{
        name:req.body.name,
        valume:req.body.volume,
        pname:req.body.pname,
        cathegorie:req.body.cathegorie,
      }
      ).then(console.log("OPERATION SUCCES"))

        
     // const goutToUpdate =  Gout.findById(noteId).then()
     // res.code(200).send({ data: goutToUpdate })
     
          .catch((err) => {
            console.log("UPDATE FAILED",err)
            res.json({
              err: err,
              message: "Une erreur c'est produite",
            });
          });
    
  }


exports.DeleteCubage=(req,res)=>{
    Cubage.findOneAndDelete({ "_id": req.params._id},(err, doc) => {
    if (err) {
        console.log("Something wrong when DELETING data!");
    }

    console.log(doc);
    return res.status(201).json({
      message: 'Cubage DELETED '
  })
});



}










