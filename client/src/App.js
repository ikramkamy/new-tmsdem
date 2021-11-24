import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import Devis from './Component/Formulaire';
import Formulefinale from './Component/Formulaire/Formule';
import NavFomule from './Component/navFomule';
import Ecommerce from './Component/Ecommerce';
import Home from './Component/Home';
import NavBar from './Component/navBar/NavBar'
import Presentation from './Component/Presentation';
import Service from './Component/Service';
import Footer from './Component/footer/Footer';
import Contactus from './Component/Contact';
import Pdfinvent from './Component/Pdfinventaire';
import Chrono from './Component/Chrono';
import Comp from '../src/images/Comp 1.gif'
import Ecommerceall from './Component/Ecommerce/Ecommerceall';
import Signin from './Component/Signin';
import Admin from './Component/admin';
function App() {

  const [showAlertBox, setShowAlertBox] = useState(false)
  const showAlert = () => {
    setShowAlertBox(!showAlertBox)
  }


useEffect(() => {

  setTimeout(() => {
    showAlert() 
  },2000);



}, [])

  const sendPrixcarton=(data)=>{
    console.log("cart")
}
const show=()=>{
  show=true;
}
  return (
    <div className="App">
      <Router>
   <Switch>
     <Route exact path="/">
     < Home/>
   
     </Route>
   <Route exact path="/depart">
   <div className="devis-wrap">
   <NavFomule/>
     <Formulefinale/>
         </div>
   
     
   </Route>
  
<Route exact path="/e-commerce">
  <NavBar/>
  <Ecommerceall sendPrixcarton={sendPrixcarton} />
<Footer/>

   </Route>
  
<Route  path="/admin"    component={Admin}  />

  <Route  path="/boutique">
  <NavBar/>
  <div className="originalBoutiquePage"> 
  <div className="originalBoutiqueContainer"> 

  <h1 className="boutTitle"> Notre Boutique </h1>
  <Ecommerceall sendPrixcarton={sendPrixcarton}  
  className="ecommComponent" 
  Style={{border : "1px solid red"}} />
  </div>
{

showAlertBox && <div className="alertBoxBoutique">
  <div className="alertBoxBoutiqueContents">
    <div className="closeButtonAlertBox" onClick={() => setShowAlertBox(false)}> X </div>
    <div>  <h4> Vous envisagez de déménager ? </h4></div>
    <div> <h5> Découvrez nos services </h5></div>
<div className="contentArrow"> 
<div> 
 <img src={Comp} />
 </div>
  </div>
    <div className="buttonGroupeBoutiqueAlert">
<div> <button> Soto</button> </div>
<div> <button> Chrono</button>  </div>
<div> <button> Stock</button>  </div>
      </div>
    </div>
    </div>

}
  </div>
<Footer/>

   </Route>




   <Route exact path="/services" >
   <NavBar/>
     <Service/>
     
   </Route>
   <Route exact path="/soto">  
   <NavFomule/>
     <Formulefinale/>
   </Route>
<Route exact path="/chrono">
<NavFomule/>
<Chrono/>

</Route>

   <Route exact path="/presentation" >
   <NavBar/>
     <Presentation/>
  
</Route>

<Route exact path="/contact">
<NavBar/>
  <Contactus/>
  <Footer/>
</Route>
<Route   exact path="/signin"     component={Signin}/>
<Route exact path="/pdf"><Pdfinvent/></Route>
   </Switch>
   </Router>
    </div>
  );
}

export default App;
