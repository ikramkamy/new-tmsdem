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
function App() {
  const sendPrixcarton=(data)=>{
    console.log("cart")
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
  <Ecommerce  sendPrixcarton={sendPrixcarton} />
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

   <Route exact path="/presentation" >
   <NavBar/>
     <Presentation/>
  
</Route>
   </Switch>
   
   
   </Router>
    </div>
  );
}

export default App;
