import React, { useEffect, useState } from 'react';
import  './e-commerce.css';
import { FaArrowCircleLeft, FaLock, FaMinus, FaPlus, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Item from './ItemWrap';
const Ecommerce=(props)=>{
const{sendPrixcarton}=props;
const[prixcarton,setPrixcarton]=useState(0);
const[produit,setProduit]=useState([
{name:"carton livre",
prix:"20 £",
dimmension:"35 x 27,5 x 30 cm",
quantite:0,
description:"3 à 4 cartons par mètre linéaire de livres",
url:"/images/cartonLivre.jpg"
},
{
  url:"/images/cartonstandard.jpg",
name:"carton standard",
prix:"20 £",
dimmension:"55 x 35 x 30 cm",
quantite:0,
description:"10 à 20 par pièce"
},

  ])
  
  const[produit2,setProduit2]=useState([
    {
      url:"/images/cartonstandard.jpg",
      name:"Carton renforcéCarton renforcé",
    prix:"20 £",
    dimmension:"55 x 35 x 30 cm",
    quantite:0,
    description:"3 à 5 par pièce"
    },
    {
url:"/images/cartongrand.jpg",
name:"Grand carton fragile ultra renforcé",
prix:"20 £",
dimmension:"45 cm x 45 cm x 56,5 cm",
quantite:0,
description:""
},
{
url:"/images/cartonverre.jpg",
name:"Carton 24 verres",
prix:"20 £",
dimmension:"35 × 34 × 27 cm",
quantite:0,
description:"Pour 24 verres. Accepte les verres d'un diamètre maximum 7.6 cm et d'une Hauteur maximum 14,4 cm"
},
{
url:"/images/cartonultraverre.jpg",
name:"Carton ultra renforcé 75 verres",
prix:"20 £",
dimmension:"45 cm x 45 cm x 56,5 cm",
quantite:0,
description:""
},
{
url:"/images/cartonbouteille.jpg",
name:"Carton bouteilles",
prix:"20 £",
dimmension:"35 x 34 x 27 cm",
quantite:0,
description:"Pour 12 bouteilles. Toutes sortes de bouteilles respectant un diamètre inférieur à 8,6 cm pour une hauteur maximum de 28 cm"
},
{
url:"/images/cartonassiettes.jpg",
name:" Carton assiettes",
prix:"20 £",
dimmension:" 35 × 34 × 27 cm",
quantite:0,
description:"Pour 9 assiettes. Ce croisillon en carton accepte toutes les assiettes d'un diamètre de 28 cm maximum et de 3.2 cm d’épaisseur"
},
{
url:"/images/papierbull.jpg",
name:"Papier bulle",
prix:"20 £",
dimmension:"Rouleau de 10 m",
quantite:0,
description:""
},
{
url:"/images/bullcraft.jpg",
name:"Bullkraft",
prix:"20 £",
dimmension:" 1,25 m x L 10 m",
quantite:0,
description:""
},
  ]);
  
const[produit3,setProduit3]=useState([
    {
    url:"/images/cartonpandri.jpg",
    name:"Carton penderie",
    prix:"20 £",
    dimmension:"  1m linéaire de vêtements sur cintres = 2 cartons",
    quantite:0,
    description:""
    },

  ])
  
  
  

 const[produit4,setProduit4]=useState([
  {
  url:"/images/rouloadhesif.jpg",
  name:"Rouleau adhésif",
  prix:"20 £",
  dimmension:"(1 pour 20 cartons).",
  quantite:0,
  description:""
  },
  {
  url:"/images/divider.jpg",
  name:"Dévidoir Pistolet pour adhésif",
  prix:"20 £",
  dimmension:"",
  quantite:0,
  description:""
  },
  {
    url:"/images/hous.jpg",
  name:" Housse de matelas",
  prix:"20 £",
  dimmension:"2,30 m de long, 2 m de large et 22 cm de haut",
  quantite:0,
  description:""
  },
  {
  url:"/images/film.jpg", 
  name:"Film étirable opaque",
  prix:"20 £",
  dimmension:"45 cm x 270 m",
  quantite:0,
  description:""
  },

])
const [cart,setCart]=useState([]);
const [show,setShow]=useState(false);
/*
const add=(e)=>{
  setCart(...{e})
}
*/

const handelshow=(e)=>{
  setCart([...cart,e]);
  //setShow(true);
  e.quantite=e.quantite+1
  setPrixcarton(prixcarton+Number(e.prix.split(" ")[0]))
}
const handelminus=(e)=>{
  if(e.quantite==0){
    alert("la quantité est 0")
  }else{ 
    
    //setShow(true);
    e.quantite=e.quantite-1
    setPrixcarton(prixcarton-Number(e.prix.split(" ")[0]))
  }
 
}

useEffect(()=>{
  sendPrixcarton(prixcarton);
  console.log("prixcarton",prixcarton)

})
console.log("CART",cart);
const [quantite,setQuantite]=useState(0)
const plus=()=>{
  setQuantite(quantite+1) ;
}

/********************************************La somme des cartons****************************************/
return(<div className="wrap-ecommerce">
<h1 className="product-titles">Pour le non-fragile</h1>
<h3 className="product-titles">Vêtements, livres, ustensiles de cuisine</h3>
<div className="carton-cathegorie-bloc">
{produit.map((e)=>
<Item add={()=>handelshow(e)} 
url={e.url} name={e.name} prix={e.prix} 
dimmension={e.dimmension} quantite={e.quantite} 
description={e.description} plus={plus}  minus={()=>handelminus(e)}/>)}</div>
<div className="sepa-catégorie-cartons">JE SOUHAITE QUE LE DÉMÉNAGEUR EMBALLE MES CARTONS NON FRAGILES</div>

<h1 className="product-titles">Pour le fragile</h1>
<h3 className="product-titles">Vaisselle, bouteilles, bibelots.</h3>
<div className="carton-cathegorie-bloc">{produit2.map((e)=><Item add={()=>handelshow(e)} url={e.url} name={e.name} prix={e.prix} dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>
<div className="sepa-catégorie-cartons">JE SOUHAITE QUE LE DÉMÉNAGEUR EMBALLE MES CARTONS FRAGILES</div>


<h1 className="product-titles">Pour les vêtements sur cintre</h1>
<div className="carton-cathegorie-bloc">{produit3.map((e)=><Item  add={()=>handelshow(e)}  url={e.url} name={e.name} prix={e.prix} dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>


<h1 className="product-titles">Autres fournitures</h1>
<div className="carton-cathegorie-bloc">{produit4.map((e)=><Item  add={()=>handelshow(e)} url={e.url} name={e.name} prix={e.prix} dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>
  
  
  {show &&(
  <div className="modal-cart">
  <div className="cart">
 
 <div className="cart-title">
   <h3>Mon panier</h3>
 <div  onClick={()=>setShow(false)}>< FaLock className="close-cart"/> </div>
 </div>
     {cart.map((e)=><div className="row">
     <div className="cart-item">{e.name}</div>
     <img src={e.url} style={{height:"50px",width:"50px"}}/>
     <div className="cart-item">{e.prix}</div>
     <div className="cart-item quantite-cart">
     <FaMinus  className="Item-Icons"/><p> {e.quantite}</p>
     <FaPlus  className="Item-Icons"/></div>
  </div>)} 
  </div> 
    
  </div>)}   

  
  
  
  
 
 

   


    
    
    </div>)
}
export default Ecommerce;