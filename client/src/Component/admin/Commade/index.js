import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import Cart from './Cart.js';
import User from './User.js';
import './commande.css';
import {FaPen, FaTrash, sFaTrash} from 'react-icons/fa';
const Comm=(props)=>{
    const {cart,user}=props;

    console.log("data from parent for commande",user);
    console.log("data from parent for commande",cart);

return(<div className="item-admin-inter">
    <div className="items-commande">
<User name={user[0].firstName}  phone={user[0].phone} email={user[0].email}/>
{cart?.map((e)=><Cart name={e.name} quantite={e.quantite}/>)}
</div>
<div className="wrap-delete-btns">
    <div className="icon-delete"><FaTrash/> supprimer</div>
    </div>
</div>)
}
export default Comm;