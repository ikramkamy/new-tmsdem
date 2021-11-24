import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import {FaPen,FaTrash,FaPlus} from 'react-icons/fa';

const Cubage=(props)=>{
const {showhendel1,showhendel,handeldeletec}=props;
 
return(<div className="item-admin-inter">
    <div className="items-user">
    <div className="elem-user">{props.name}</div>
    <div className="elem-user larger">{props.volume}</div>
    
    <div className=" elem-user icon-delete" 
    onClick={handeldeletec}><FaTrash onClick={handeldeletec}/> supprimer</div>
    
   {/* <div className=" elem-user icon-edite" onClick={showhendel}><Link to={`/admin/${props._id}`}><FaPen/> Modifier</Link></div>*/}
</div>


</div>)
}
export default Cubage;