import React from 'react';
import  './navformule.css';
import { FaArrowCircleLeft,FaShoppingBag,FaFacebook, FaUber, FaPersonBooth, FaPhone, FaUser, FaBuilding} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const NavFomule=()=>{

return(<div className="wrap-nav">
<div className="wrap-inter">
<div className="nav-form-item ">
<FaBuilding className="icon-nav-formule"/></div>
<div className="nav-form-item">
    <div className="nav-inter-item">  
    <div className="circle">1</div>Ajoutez vos options</div> 
 </div>
<div className="nav-form-item">
<div className="nav-inter-item"> 
    <div className="circle">2</div>Retourtnez à la page d'accueil</div>
    </div>

<div className="nav-form-item">
<div className="nav-inter-item">
    <div className="circle">3</div>Réservez votre déménagement</div>
</div>
<div className="nav-form-item speration"></div>
<div className="nav-form-item">
<span className="text-phone">Besoin d'assistance ?</span>
<span><FaPhone className="icon-nav-formule"/>+33123366699 </span>

</div>
<div className="nav-form-item">
    
    <FaUser className="icon-nav-formule"/>
    </div>
<div className="nav-form-item ">
    <FaShoppingBag className="icon-nav-formule"/>
    </div>
</div>
    </div>)
}
export default NavFomule;