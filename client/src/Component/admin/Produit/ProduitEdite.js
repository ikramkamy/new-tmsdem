import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {FaArrowDown, FaPlus,FaPen,FaSave} from "react-icons/fa";
import { useParams } from 'react-router-dom';

const EditeProduit=(props)=>{

let {_id}=useParams();
const [produit,setProduit]=useState([]);
const {showhendel}=props; 
  useEffect(() => {
const expensesListResp = async () => {
      await axios.get(`/getproduitByID/${_id}`)
      .then(response =>{
        console.log("response",response.data);
       setProduit(response.data);
       /*updates.name=produit.name;*/
 })
   }
    expensesListResp();
  },[]);
  const[updates,setUpdates]=useState({
    _id:_id,
    name:"",
    prix:"",
    disponible:"",
    cathegorie:"",
    img:"",
   });

 useEffect(()=>{
  console.log("produit",produit)
  setUpdates({
    name:produit.name,
    prix:produit.prix,
})
},[produit])

const handelchange=(event)=>{
const {name,value}=event.target;
      setUpdates(prevInput=>{
        return  { 
          ...prevInput,
          [name]:value }
      })
    }
    const update=()=>{
       axios.post(`/updateProduitSS/${_id}`,{
          _id:"",
          name:updates.name,
          prix:updates.prix,
         disponible:updates.disponible,
         cathegorie:updates.cathegorie,
         img:updates.img,
         
        })
    .then(setUpdates({
          name:"",
          _id:"",
          prix:"",
          disponible:"",
          img:"",
        })
    ) 
    showhendel();
    }
return(
    <div className="Edite">
    <div className="close" onClick={props.showhendel}>&times;</div>
    <div className="wrap-logo">
      <img src="/images/logo-01.png" className="logo" alt='logo'/>
    </div> 
    
    <div className="Edit-fields">
    <input placeholder=" le produit" name="name" onChange={handelchange} value={updates.name}/>
   <select data-id="domain-switcher" onChange={handelchange} value={updates.cathegorie} type="text" name="cathegorie" >
   <option label="selectioner" value="selectioner"></option>
            <option label="Pour le non-fragile" value="Pour le non-fragile"></option>
            <option label="Pour le fragile" value="Pour le fragile"></option>
            <option label="Pour les vêtements sur cintre" value="Pour les vêtements sur cintre"></option>
            <option label="Autres fournitures" value="Autres fournitures"></option>
  
  </select>
  
   <input type="file" 
    className="input-img"  placeholder="image" 
    name="img" onChange={handelchange} />
    </div>
    <div className="save-btn" onClick={update} >Enregistrer</div>
</div>)
     }
export default EditeProduit;