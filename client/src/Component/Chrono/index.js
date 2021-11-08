import React,{useState,useEffect} from 'react';
import './chrono.css';
import jsPDF from 'jspdf';
import  {MDBInput}  from 'mdbreact';
import InventChrono from '../Pdfinventaire/InventChrono';
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
  setTotal(0+val41+val42+val43+val45+val44+val71+val72+val73+val75+val74)

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
 return(<div className="principal-formulaire">

<div style={{width:"80%"}}>
<div className="text-calcul">
<h1>Votre projet de déménagement</h1>
<div className="text-fomulaire">
    La formule chrono<br/>
Choisissez maintenant vos options. 
Votre devis se recalcule automatiquement.</div>
</div>
</div>
<div className="les-champs-de-calcul chrono-form">
<div className="wrap-formulaire">
<div className="calcul-bloc">
<div className="check-box-principl">
<MDBInput label="4 h" type="checkbox" id="f1" checked={form4} onChange={handelform4}/>
<MDBInput label="7 h" type="checkbox" id="f2" checked={form7} onChange={handelform7}/> 
</div>




{form4 && (
<div className="chrono-form">
<MDBInput label="une personne + un camion" type="checkbox" id="form41" checked={form41} onChange={handelform41}/>
<MDBInput label="2 personnes + un camion" type="checkbox" id="form42" checked={form42} onChange={handelform42}/>
<MDBInput label="3 personnes + un camion" type="checkbox" id="form43" checked={form43} onChange={handelform43}/>
<MDBInput label="4 personnes + un camion" type="checkbox" id="form44" checked={form44} onChange={handelform44}/>
<MDBInput label="un camion additionnel" type="checkbox" id="form45" checked={form45} onChange={handelform45}/>
</div>)}














{form7 &&(<div className="chrono-form">
  <MDBInput label="une personne + un camion" type="checkbox" id="form71" checked={form71} onChange={handelform71}/>
<MDBInput label="2 personnes + un camion" type="checkbox" id="form72" checked={form72} onChange={handelform72}/>
<MDBInput label="3 personnes + un camion" type="checkbox" id="form73" checked={form73} onChange={handelform73}/>
<MDBInput label="4 personnes + un camion" type="checkbox" id="form74" checked={form74} onChange={handelform74}/>
<MDBInput label="un camion additionnel" type="checkbox" id="form75" checked={form75} onChange={handelform75}/>
</div>)
}










</div>




<div className="calcul-montant"><p>DÉMÉNAGEMENT<br/></p>

<div className="total-formulaire">
    <div>Total: {total} €</div>

</div> 


</div>


</div>
</div>

    </div>)
}
export default Chrono;