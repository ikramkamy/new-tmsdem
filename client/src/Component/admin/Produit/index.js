import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import {FaPen,FaTrash,FaPlus} from 'react-icons/fa';
import ProduitCreate from './CreateProduit';
const Produit=(props)=>{
const {showhendel1,showhendel,handeldelete}=props;
 
return(<div className="item-admin-inter">
    <div className="items-user">
    <div className="elem-user">{props.name}</div>
    <div className="elem-user">{props.dimmension}</div>
    <div className="elem-user">{props.prix}</div>
    <div className="elem-user larger">{props.cathegorie}</div>
    
    <div className=" elem-user icon-delete" onClick={handeldelete}><FaTrash onClick={handeldelete}/> supprimer</div>
    
    <div className=" elem-user icon-edite" onClick={showhendel}><Link to={`/admin/${props._id}`}><FaPen/> Modifier</Link></div>
</div>


</div>)
}
export default Produit;