import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
//import Logo from '/images/logo-01.png';
import './produits.css';


const ProduitCreate=(props)=>{
  const[files,setFiles]=useState([]);
  const [formData, setFormData] = useState('');
  const {showhendel1}=props;
  const [produits,setProduits]=useState(
      {  
        name:"",
        prix:"",
        cathegorie:"",
        pname:"",
        dimmension:"",
        img:"",
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
// Upload image
const upload = ({ target: { files } }) => {
  
  let data = new FormData();
  data.append('img', files[0]);
  data.append('pname', files[0].name);
  data.append('name',produits.name);
  data.append('dimmension',produits.dimmension);
  data.append('cathegorie',produits.cathegorie);
 data.append('prix', produits.prix);
  setFormData(data);
 
};
//console.log("image name",produits.pname);
//console.log("form data",formData);
    const create=()=>{
    axios.post(`/ajouter`,formData)
    .then(response =>console.log("response ",response)).catch((err)=>{
    console.log('error in posting is',err);
          })
          showhendel1();
       }
        
     
return( <div className="Edite">

   <div className="close" onClick={props.showhendel1}>&times;</div>
  <div className="wrap-logo"> 
  <img src="/images/logo-01.png" className="logo" alt='logo'/></div>
   
   <div className="Edit-fields">
   <input placeholder=" le produit" name="name" onChange={handelchange} value={produits.name}/>
   <select data-id="domain-switcher" onChange={handelchange} value={produits.cathegorie} type="text" name="cathegorie" >
   <option label="selectioner" value="selectioner"></option>
            <option label="Pour le non-fragile" value="Pour le non-fragile"></option>
            <option label="Pour le fragile" value="Pour le fragile"></option>
            <option label="Pour les vêtements sur cintre" value="Pour les vêtements sur cintre"></option>
            <option label="Autres fournitures" value="Autres fournitures"></option>
  
  </select>
  <input placeholder="Dimmension" name="dimmension" onChange={handelchange} value={produits.dimmension}/>
   <input placeholder="Prix" name="prix" onChange={handelchange} value={produits.prix}/>
   
   <input type="file" 
     className="input-img" 
     placeholder="image" 
     name="img" onChange={upload} />
   
   </div>
   <div className="save-btn" onClick={create} > Créer</div>
    </div>)
  
  }
  export default ProduitCreate;