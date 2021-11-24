import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import './utilisateur.css';
import {FaPen, FaTrash, sFaTrash} from 'react-icons/fa';
const Utilisateur=(props)=>{

 
return(<div className="item-admin-inter">
    <div className="items-user">
    <div className="elem-user">{props.name}</div>
    <div className="elem-user">{props.fname}</div>
    <div className="elem-user">{props.phone}</div>
    <div className="elem-user width-style">{props.email}</div>
    <div className=" elem-user icon-delete"><FaTrash/> supprimer</div>
</div>


</div>)
}
export default Utilisateur;