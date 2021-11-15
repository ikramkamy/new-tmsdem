import React,{useState,useEffect} from 'react';
import './chrono.css';
import jsPDF from 'jspdf';
import  {MDBInput}  from 'mdbreact';
import InventChrono from '../Pdfinventaire/InventChrono';
import Ecommerceall from '../Ecommerce';
const Chrono=()=>{

/**************PDF********************************/
 const [showpdf,setShowpdf]=useState(false);
 const [form4,setForm4]=useState(false);
 const [form7,setForm7]=useState(false);
const generatepdf=()=>{
    var doc= new jsPDF('portrait','pt', 'a4');
    /*
    doc.text(60,60,'Entreprise: Amogela');
    doc.text(60,40,'Télèphone:+2130.......');
    doc.text(60,20,'Email:email@gmail.com');
    doc.text(60,10,"liste");
    */
    doc.html(document.querySelector("#all"),{callback: function(pdf){pdf.save("inventaire.pdf")}})
    
}

/********************************************/
const [total,setTotal]=useState(0);
const [form41,setForm41]=useState(false);
const [val41,setVal41]=useState(0);
const [form42,setForm42]=useState(0);
const [val42,setVal42]=useState(0);
const [form43,setForm43]=useState(0);
const [val43,setVal43]=useState(0);
const [form44,setForm44]=useState(0);
const [val44,setVal44]=useState(0);
const [form45,setForm45]=useState(false);
const [val45,setVal45]=useState(0);
const [increment,setIncrement]=useState()

/***************************La formule générale **********************/
const handelform4=()=>{
setForm4(true);
setForm7(false);
}
const handelform41=()=>{
    setForm41(true);
    setForm42(false);
    setForm44(false);
    setForm43(false);
    setVal41(190);
    setVal42(0);
    setVal43(0);
    setVal44(0);
    setVal71(0);
    setVal72(0);
    setVal73(0);
    setVal74(0);
    setVal75(0);
    setIncrement(increment+1);
  
/********************************************** */    
}
const handelform42=()=>{
    setForm42(!form42)
    setForm41(false);
    setForm44(false);
    setForm43(false);
    setVal41(0);
    setVal43(0);
    setVal44(0);
    setVal71(0);
    setVal72(0);
    setVal73(0);
    setVal74(0);
    setVal75(0);
    setVal42(360);
  }
/*************************************************/
const handelform43=()=>{
    setForm42(false)
    setForm41(false);
    setForm44(false);
    setForm43(true);
    setVal41(0);
    setVal42(0);
    setVal43(0);
    setVal71(0);
    setVal72(0);
    setVal73(0);
    setVal74(0);
    setVal75(0);
    setVal43(480);
    
}
/**********************************************/
const handelform44=()=>{
  setForm42(false)
    setForm41(false);
    setForm43(false);
    setForm42(false);
    setForm44(true);
    setVal41(0);
    setVal42(0);
    setVal43(0);
    setVal71(0);
    setVal72(0);
    setVal73(0);
    setVal74(0);
    setVal75(0);
    setVal44(600);
  
}
/********************************************/
const handelform45=()=>{
  setForm45(!form45);
  if(form45==false){setVal45(130);}
  else{setVal45(0);}
}
/********************************************************************/
const handelform7=()=>{
    setForm4(false);
    setForm7(true);
}
/****************************TOTAL*************************************/
useEffect(()=>{
  setTotal(0+val41+val42+val43+val45+val44+val71+val72+val73+val75+val74+pricart)

})
/******************************FORMULE 7 H*************************/
const [form71,setForm71]=useState(false);
const [val71,setVal71]=useState(0);
const [form72,setForm72]=useState(0);
const [val72,setVal72]=useState(0);
const [form73,setForm73]=useState(0);
const [val73,setVal73]=useState(0);
const [form74,setForm74]=useState(0);
const [val74,setVal74]=useState(0);
const [form75,setForm75]=useState(false);
const [val75,setVal75]=useState(0);

const handelform71=()=>{
  setForm71(true);
  setForm72(false);
  setForm74(false);
  setForm73(false);
  setVal71(250);
  setVal72(0);
  setVal73(0);
  setVal74(0);
  setVal41(0);
  setVal42(0);
  setVal43(0);
  setVal44(0);
  setVal45(0);
  setIncrement(increment+1);

/********************************************** */    
}
const handelform72=()=>{
  setForm72(!form42)
  setForm71(false);
  setForm74(false);
  setForm73(false);
  setVal71(0);
  setVal73(0);
  setVal74(0);
  setVal41(0);
  setVal42(0);
  setVal43(0);
  setVal44(0);
  setVal45(0);
  setVal72(420);
  }

/*************************************************/
const handelform73=()=>{
  setForm72(false)
  setForm71(false);
  setForm74(false);
  setForm73(true);
  setVal71(0);
  setVal72(0);
  setVal73(0);
  setVal41(0);
  setVal42(0);
  setVal43(0);
  setVal44(0);
  setVal45(0);
  setVal73(600);
}
/**********************************************/
const handelform74=()=>{
    setForm72(false)
    setForm71(false);
    setForm73(false);
    setForm72(false);
    setForm74(true);
    setVal71(0);
    setVal72(0);
    setVal73(0);
    setVal41(0);
    setVal42(0);
    setVal43(0);
   setVal44(0);
   setVal45(0);
    setVal74(780);
}
/********************************************/
const handelform75=()=>{
  setForm75(!form75);
  if(form75==false){setVal75(200);}
  else{setVal75(0);}
  }

  /*******************************E-commerce pour chrono**************************/
const[showecommerce,setShowecommerce]=useState(false);
const[box1,setBox1]=useState(false);
const[box2,setBox2]=useState(true);
const handelecommerce=()=>{
  setShowecommerce(!showecommerce)    
}
const handelCheck=()=>{
  setBox1(true); 
  setBox2(false)
  setShowecommerce(true) 
}
const handelCheck2=()=>{
  setBox2(true); 
  setBox1(false)
  setShowecommerce(false) 
}
/**************************************Calcul pri carton******************************/
const [pricart,setPricart]=useState(0);
const sendPrixcarton=(data)=>{
  setPricart(data);
   /* 
    setVarchange(varchange+1);
    */
}



/***********************************************************************************/
 return(<div className="principal-formulaire">

<div style={{width:"80%"}}>
<div className="text-calcul">
<h1 style={{fontSize:"5.3em", color:"#2C216F", overflow:"hidden"} }>Formule Chrono</h1>
<div className="text-fomulaire" >
  
Choisissez vos options et votre devis se recalcule automatiquement.</div>

</div>
</div>
<div className="les-champs-de-calcul chrono-form">
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="check-box-principl">

<div style={{display:"flex"}}> 
                                    <input  type="radio" label="4 h" id="f1" value="4 h" name="rdB8" checked={form4}  /*checked={autoO}*/ onChange={handelform4} />
                                    <label for="4 h"> 4 h</label>
                                    </div>


                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="7 h" id="f2" value="7 h" name="rdB8" checked={form7}  /*checked={autoO}*/ onChange={handelform7} />
                                    <label for="7 h"> 7 h</label>
                                    </div>

{/*
<MDBInput label="4 h" type="checkbox" id="f1" checked={form4} onChange={handelform4}/>
<MDBInput label="7 h" type="checkbox" id="f2" checked={form7} onChange={handelform7}/> */}





</div>




{form4 && (
<div className="chrono-form">


<div style={{display:"flex"}}> 
                                    <input  type="radio" label="une personne + un camion" id="form41" value="une personne + un camion" name="rdB9" checked={form41}  /*checked={autoO}*/ onChange={handelform41} />
                                    <label for="une personne + un camion"> 1 personne  +  un camion</label>
                                    </div>


                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="2 personnes + un camion" id="form42" value="2 personnes + un camion" name="rdB9" checked={form42}  /*checked={autoO}*/ onChange={handelform42} />
                                    <label for="2 personnes + un camion"> 2 personnes + un camion</label>
                                    </div>


        


                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="3 personnes + un camion" id="form43" value="3 personnes + un camion" name="rdB9" checked={form43}  /*checked={autoO}*/ onChange={handelform43} />
                                    <label for="3 personnes + un camion"> 3 personnes + un camion</label>
                                    </div>

                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="4 personnes + un camion" id="form44" value="4 personnes + un camion" name="rdB9" checked={form44}  /*checked={autoO}*/ onChange={handelform44} />
                                    <label for="4 personnes + un camion"> 4 personnes + un camion</label>
                                    </div>



                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="un camion additionnel" id="form42" value="Un camion additionnel" name="rdB9" checked={form45}  /*checked={autoO}*/ onChange={handelform45} />
                                    <label for="un camion additionnel">1 camion additionnel</label>
                                    </div>
{/*<MDBInput label="une personne + un camion" type="checkbox" id="form41" checked={form41} onChange={handelform41}/>
<MDBInput label="2 personnes + un camion" type="checkbox" id="form42" checked={form42} onChange={handelform42}/>
</div>

<div className="mdbinput">
<MDBInput label="3 personnes + un camion" type="checkbox" id="form43" checked={form43} onChange={handelform43}/>
</div>
<div className="mdbinput">
<MDBInput label="4 personnes + un camion" type="checkbox" id="form44" checked={form44} onChange={handelform44}/>
</div>
<div className="mdbinput">
<MDBInput label="un camion additionnel" type="checkbox" id="form45" checked={form45} onChange={handelform45}/>

*/}






</div>)}

{form7 &&(<div className="chrono-form">


<div style={{display:"flex"}}> 
                                    <input  type="radio" label=" 1 personne + un camion" id="form71" value="1 personne + un camion" name="rdB10" checked={form71}  /*checked={autoO}*/ onChange={handelform71} />
                                    <label for="1 personne + un camion"> 1 personne + un camion</label>
                                    </div>



                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="2 personnes + un camion" id="form72" value="2 personnes + un camion" name="rdB10" checked={form72}  /*checked={autoO}*/ onChange={handelform72} />
                                    <label for=" 2 personnes + un camion"> 2 personnes + un camion</label>
                                    </div>




                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label=" 3 personnes + un camion" id="form73" value="3 personnes + un camion" name="rdB10" checked={form73}  /*checked={autoO}*/ onChange={handelform73} />
                                    <label for=" 3 personnes + un camion"> 3 personnes + un camion</label>
                                    </div>


                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="4 personnes + un camion" id="form74" value="4 personnes + un camion" name="rdB10" checked={form74}  /*checked={autoO}*/ onChange={handelform74} />
                                    <label for=" 4 personnes + un camion"> 4 personnes + un camion</label>
                                    </div>



                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="un camion additionnel" id="form75" value="Un camion additionnel" name="rdB10" checked={form75}  /*checked={autoO}*/ onChange={handelform75} />
                                    <label for="un camion additionnel">1 camion additionnel</label>
                                    </div>



{  /*<MDBInput label="une personne + un camion" type="checkbox" id="form71" checked={form71} onChange={handelform71}/>
<MDBInput label="2 personnes + un camion" type="checkbox" id="form72" checked={form72} onChange={handelform72}/>
</div>
<div className="mdbinput">
<MDBInput label="3 personnes + un camion" type="checkbox" id="form73" checked={form73} onChange={handelform73}/>
</div>
<div className="mdbinput">
<MDBInput label="4 personnes + un camion" type="checkbox" id="form74" checked={form74} onChange={handelform74}/>
<MDBInput label="un camion additionnel" type="checkbox" id="form75" checked={form75} onChange={handelform75}/>*/}





</div>)
}

Avez-vous besoin de fournitures pour votre déménagement?
<div className="wrap-formulaire-all">
<div className="calcul-bloc-all">
<div className="calcul-bloc-item-all">
<div className="inter-calcul-item-all">
<div className="wrap-check-yes-no-all">
<div className=" mdbinput"> 
<MDBInput label="oui" type="checkbox" id="checkbox1" checked={box1} onChange={handelCheck}/>
</div>  
<div className=" mdbinput" >
<MDBInput label="Non" type="checkbox" id="checkbox2" checked={box2} onChange={handelCheck2}/>
</div> 
</div>
</div>
    </div>   
{showecommerce && (<Ecommerceall sendPrixcarton={sendPrixcarton} id="ecommerce"/>)}
    
    
    </div> 
</div>





</div>




<div className="calcul-montant"  style={{border: "1px hidden red", background:"rgba(44,33,111,0.1)", color:"rgb(44,33,111)"}}><p>DÉMÉNAGEMENT<br/></p>

<div className="total-formulaire" style={{border:"none"}}>
    <div style={{fontSize:"1.3em", fontWeight:"600", color:"rgb(44,33,111)", border:"none", fontSize:"1.77em", marginTop:"-20px"}}>Total: {total} €</div>

</div> 


</div>


</div>
</div>
<footer className="footer-formulaire">©2021 TMSDEM</footer>
    </div>)
}
export default Chrono;