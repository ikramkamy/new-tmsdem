import React from 'react';
import  './chrono.css';
import { FaArrowCircleLeft} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const FormuleChrono=()=>{



    return(<div className="chrono">
<h1>Service de déménagement </h1>
<div className="chrono-btn-wrap"><button>Commander</button></div>
<Link to="/"><FaArrowCircleLeft  className="icon-choix"/></Link>
Retour à la page d'accueil
    </div>)
}
export default FormuleChrono;