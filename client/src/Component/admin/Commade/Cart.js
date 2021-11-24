import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import './cart.css';
const Cart=(props)=>{
//console.log("car from parent",cart)
 
return(<div className="cart">
<div className="elem-cmnd-list" >Le produit</div>
<div className="elem-cmnd-list">{props.name}</div> 
<div className="elem-cmnd-list">la quantité : </div>
<div className="elem-cmnd-list">{props.quantite}</div>
<div className="elem-cmnd-list">la quantité : </div>
<div className="elem-cmnd-list">{props.quantite}</div>
</div>)
}
export default Cart;