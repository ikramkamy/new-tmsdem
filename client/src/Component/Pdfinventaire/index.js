import React,{useEffect,useState} from "react";
import { jsPDF } from "jspdf";


const Pdfinvent=(props)=>{

//const {generatepdf}=props;
const generatepdf=()=>{
    var doc= new jsPDF('portrait','pt', 'a4');
    /*
    doc.text(60,60,'Entreprise: Amogela');
    doc.text(60,40,'Télèphone:+2130.......');
    doc.text(60,20,'Email:email@gmail.com');
    doc.text(60,10,"liste");
    */
    doc.html(document.querySelectorAll("#all")[1],{callback: function(pdf){pdf.save("inventaire.pdf")}})
    
    }

    return(<div className=" wrap-pdf">

{props.children}

    </div>)
}
export default Pdfinvent;