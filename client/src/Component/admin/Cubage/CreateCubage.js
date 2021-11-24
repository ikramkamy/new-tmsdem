import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
//import Logo from '/images/logo-01.png';
const CubageCreate=(props)=>{
  const[files,setFiles]=useState([]);
  const [formData, setFormData] = useState('');
  const {handelshowcubageCreate}=props;
  const [produits,setProduits]=useState(
      {  
       name:"",
       volume:"",
      }
);
const handelchange=(event)=>{
    const {name,value}=event.target;
    setProduits(prevInput=>{
            return  { 
              ...prevInput,
              [name]:value }
          })
        }
const create=()=>{
    axios.post(`/ajouter-elem-cubage`,produits)
    .then(response =>console.log("response ",response)).catch((err)=>{
    console.log('error in posting is',err);
          });
       }
        
return( <div className="Edite">

   <div className="close" onClick={handelshowcubageCreate}>&times;</div>
  <div className="wrap-logo"> 
  <img src="/images/logo-01.png" className="logo" alt='logo'/></div>
   
   <div className="Edit-fields">
   <input placeholder=" le produit" name="name" onChange={handelchange} value={produits.name}/>
   <input placeholder="Volume" name="volume" onChange={handelchange} value={produits.volume}/>
 </div>
   <div className="save-btn" onClick={create}> Créer</div>
    </div>)
  
  }
  export default CubageCreate;