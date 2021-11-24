import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';

const Produitlist=(props)=>{

 
return(<div className="item-admin-inter">
<div className="items-user">
<div className="elem-user">{props.name}</div>
<div className="elem-user">{props.dimmension}</div>
<div className="elem-user">{props.prix}</div>
<div className="elem-user width-style">{props.cathegorie}</div>
<div className=" elem-user icon-delete"><FaTrash/> supprimer</div>
<div className=" elem-user icon-edite"><FaTrash/> supprimer</div>
</div>


</div>)
}
export default Produitlist;