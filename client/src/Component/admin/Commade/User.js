import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import './user.css';
const User=(props)=>{

 
return(<div className="user">
<div className="elem-cmnd-list">Prénom</div>
 <div className="elem-cmnd-list">{props.name}</div>
<div className="elem-cmnd-list">Télèphone</div> 
<div className="elem-cmnd-list">{props.phone}</div>
<div  className="elem-cmnd-list">Email</div> 
<div className="elem-cmnd-list">{props.email}</div>
</div>)
}
export default User;