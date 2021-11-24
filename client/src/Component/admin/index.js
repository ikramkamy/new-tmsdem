import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comm from './Commade';
import User from './Commade/User.js';
import Cart from './Commade/Cart.js';
import NavBar from '../navBar/NavBar.js';
import Logo from '../../images/logo-01.png';
import axios from 'axios';
import './admin.css';
import Utilisateur from './Utilisateur';
import Pagination from './Utilisateur/Pagination';
import Produit from './Produit';
import ProduitCreate from './Produit/CreateProduit';
import EditeProduit from './Produit/ProduitEdite';
import CubageCreate from './Cubage/CreateCubage';
import Cubage from './Cubage';
const Admin=(props)=>{
const [showCommande,setshowCommande]=useState(false);
const [showusers,setshowusers]=useState(false);
const [showproduit,setshowproduit]=useState(false);
const [showcubage,setShowcubage]=useState(false)
const [commande,setCommande]=useState([]);
const [user,setUser]=useState([]);
const [produit,setProduit]=useState([]);
const [cubage,setCubage]=useState([]);
useEffect(()=>{
axios.get('/afficher-les-commandes').then((response)=>{
    setCommande(response.data);
    }).catch((err)=>{
})
},[commande])

/***************************UTILISAEURS*************************/
const [currentPage,setCurrentPage]=useState(1);
const [dataperpage,setDataperpage]=useState (15);
const indexOfLastPost=currentPage * dataperpage;
const indexOfFirstPost=indexOfLastPost-dataperpage;
const currentPost=user.slice(indexOfFirstPost,indexOfLastPost);
const currentPost2=commande.slice(indexOfFirstPost,indexOfLastPost);
const paginate =(number)=> setCurrentPage(number);
useEffect(()=>{
    axios.get('/getallusers').then((response)=>{
      
        setUser(response.data)
        
    }).catch((err)=>{
    })
    },[user])
/*******************************PRODUITS******************************/
useEffect(()=>{
    axios.get('/getproduit').then((response)=>
        setProduit(response.data)
    )
},[produit])
 const handeldelete=(_id)=>{
     alert("wera deleting");
     console.log('id',_id)
axios.delete(`/Deleteproduit/${_id}`,).then((response)=>{
console.log("respnse",response);
})
 }
/*********************************CUBAGE*****************************/
const [showcubageCreate,setshowcubageCreate]=useState(false);
useEffect(()=>{
axios.get('//getcubage').then((response)=>setCubage(response.data))
},[cubage])
const handelshowcubageCreate=()=>{
    setshowcubageCreate(!showcubageCreate)
}
/*******************************AFICHAGE DES ELEMENT******************************/
const handelshowcommande=()=>{
    setshowCommande(true);
    setshowusers(false);
    setshowproduit(false);
    setShowcubage(false);
}
const handelshowusers=()=>{
    setshowCommande(false );
    setshowproduit(false);
    setShowcubage(false);
    setshowusers(true );
}
const handelshowproduit=()=>{
    setshowusers(false);
    setshowCommande(false );
    setshowproduit(true);
    setShowcubage(false);
}
const handelshowcubage=()=>{
    setshowusers(false);
    setshowCommande(false );
    setshowproduit(false);
    setShowcubage(true);
}
const [showcreate,setShowcreate]=useState(false);
const [showedite,setShowedite]=useState(false);
const showhendel1=()=>{
    setShowcreate(!showcreate)
}
const showhendel=()=>{
    setShowedite(!showedite) 
}
return(<div className="admin">
    <div className="nav-admin">
        <img src={Logo}/>
        <h1 className="side-title">TMSDEM </h1>
        </div>
<div className="wrap-admin">
<div className="side-bar">
<h1 className="side-title">TMSDEM admin</h1>
<div className="side-btn" onClick={handelshowusers}>Utilisateur</div>
<div className="side-btn" onClick={handelshowcommande}> commandes</div>
<div className="side-btn" onClick={handelshowproduit}>Produits</div>
<div className="side-btn" onClick={handelshowcubage}> Elèments de cubage</div>
<div className="side-btn" onClick={()=>setshowCommande(true)}>Calendrier</div>
</div>
{showCommande &&(<div className="item-admin">
<h2 className="title-admin-inter">les commandes</h2>
{currentPost2?.map((e)=><Comm   cart={e.cart}  user={e.user}/>)}



<Pagination  

    dataperpage={dataperpage} 
    totaldata={user.length} 
    paginate={paginate}/>
 
</div>)}

{showusers && (<div className="item-admin">
<h2 className="title-admin-inter">les utilisateurs</h2>
<div  className="item-admin-inter" >
<div className="items-user">
<div className="elem-user">Nom</div>
<div className="elem-user">Prénom</div>
<div  className="elem-user">Télèphone</div> 
<div  className="elem-user">Email</div> 
<div className="elem-user">Supprimer</div>
</div>

</div>
{currentPost?.map((e)=>
<Utilisateur  name={e.firstName} phone={e.phone}  email={e.email} fname={e.lastName} />

)}
 <Pagination  

    dataperpage={dataperpage} 
    totaldata={user.length} 
    paginate={paginate}/>
 
   
</div>)}


{showproduit &&(<div  className="item-admin">
<h2 className="title-admin-inter">les Produits</h2>
<div className=" btn-create" onClick={showhendel1}>
<div className="btn">Ajouter un produit</div></div>
<div  className="item-admin-inter" >
<div className="items-user">
<div className="elem-user">Produit</div>
<div className="elem-user">Dimmension</div>
<div  className="elem-user">Prix</div> 
<div  className="elem-user larger">Cathegorie</div> 


<div className="elem-user">Supprimer</div>

<div className="elem-user" >Modifier</div>
</div>

</div>
{produit?.map((e)=>
<Produit  name={e.name} 
 cathegorie={e.cathegorie} dimmension={e.dimmension} 
 prix={e.prix}
 showhendel1={showhendel1}
 showhendel={showhendel}
 handeldelete={()=>handeldelete(e._id)}
 _id={e._id}
 />

)}
 <Pagination  

    dataperpage={dataperpage} 
    totaldata={user.length} 
    paginate={paginate}/>
 
{showcreate && (<ProduitCreate showhendel1={showhendel1}/>)}
 {showedite && (<EditeProduit   showhendel={showhendel}/>)}
</div>)}




{showcubage && (<div  className="item-admin">
<h2 className="title-admin-inter">l'élèment de cubage</h2>
<div className=" btn-create" >
<div className="btn" onClick={handelshowcubageCreate}>Ajouter un élèment de cubage</div>
</div>
<div  className="item-admin-inter" >
<div className="items-user">
<div className="elem-user">L'élèment</div>
<div className="elem-user">Le volume</div>
<div className="elem-user">Supprimer</div>
</div>
</div>

{showcubageCreate && (<CubageCreate handelshowcubageCreate={handelshowcubageCreate}/>)}
</div>)}







</div>
</div>)
}
export default Admin;