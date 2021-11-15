import React from 'react';
import  './navformule.css';
import { FaArrowCircleLeft,FaShoppingBag,FaFacebook, FaUber, FaPersonBooth, FaPhone, FaUser, FaBuilding} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import NavBar from '../navBar/NavBar'

const NavFomule=()=>{

return(<div className="wrap-nav">

<NavBar />

<div className="wrap-inter">
 {
        /* <div className="nav-form-item ">
   
   
<FaBuilding className="icon-nav-formule"/> 


</div>*/}

<div className="nav-form-item homeReturnButton">
    <div className="nav-inter-item">  

    <i class="fas fa-arrow-left"></i><div> Retour accueil </div>
    </div> 
 </div>

 <Link to="/soto"  style={{textDecoration:"none"}}>
<div className="nav-form-item">
<div className="nav-inter-item"> 
    <div className="circle">1</div>Formule Soto</div>
    </div>
</Link>


 <Link to="/chrono" style={{textDecoration:"none"}}>
<div className="nav-form-item">
   
<div className="nav-inter-item">
   <div className="circle">2</div>
   Formule chrono</div> 
</div>
</Link>

 {/* <div className="nav-form-item speration"></div> */}


  {/*<div className="nav-form-item">
   <span className="text-phone">Besoin d'assistance ?</span>
<span><FaPhone className="icon-nav-formule"/>+33123366699 </span>


</div>*/}
<div className="navRightIconSide"> 
 <div className="nav-form-item">
    <FaUser className="icon-nav-formule"/>
    </div>

 <div className="nav-form-item ">
    <FaShoppingBag className="icon-nav-formule"/>
    </div>
    </div>
</div>
    </div>)
}
export default NavFomule;