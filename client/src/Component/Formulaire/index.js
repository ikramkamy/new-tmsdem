import { Button } from 'bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleLeft} from 'react-icons/fa';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import NavFomule from '../navFomule';
import './devis.css';


const Devis=()=>{
    const [startDate, setStartDate] = useState(new Date());
    var date = new Date();
    const[show,setShow]=useState(true);
    const[check1,setCheck1]=useState(false);
    const[check2,setCheck2]=useState(false);
    const[check3,setCheck3]=useState(false);
    const[check4,setCheck4]=useState(false);
    const[check5,setCheck5]=useState(false);
    const[check6,setCheck6]=useState(false);
    const[check7,setCheck7]=useState(false);
    const[check8,setCheck8]=useState(false);
    const[check9,setCheck9]=useState(false);
    const[check10,setCheck10]=useState(false);
    const[check11,setCheck11]=useState(false);
    const[check12,setCheck12]=useState(false);
    const[checka11,setChecka11]=useState(false);
    const[check22,setCheck22]=useState(false);
    const[check33,setCheck33]=useState(false);
    const[check44,setCheck44]=useState(false);
    const[check55,setCheck55]=useState(false);
    const[check66,setCheck66]=useState(false);
    const[check77,setCheck77]=useState(false);
    const[check88,setCheck88]=useState(false);
    const[check99,setCheck99]=useState(false);
    const[check100,setCheck100]=useState(false);
    const[check111,setCheck111]=useState(false);
    const[check112,setCheck112]=useState(false);
    const[dep1,setDep1]=useState(false);
    const[dep2,setDep2]=useState(false);
    const[arr1,setArr1]=useState(false);
    const[arr2,setArr2]=useState(false);
   
    
    const handelChange2=()=>{

        setCheck1(false) 
        setCheck2(true) 
    }
    const handelChange3=()=>{

        setCheck3(true) 
        setCheck4(false) 
       
    }
    const handelChange4=()=>{

        setCheck3(false) 
        setCheck4(true) 
       setTotal(120)
    }
    const handelChange5=()=>{

        setCheck5(true) ;
        setCheck6(false); 
        let t=120;
        setTotal(t+250);
    }
    const handelChange6=()=>{

        setCheck5(false) 
        setCheck6(true) 
        let t=120;
        setTotal(t+450);
    }
    const handelChange7=()=>{
        setCheck7(true) 
        setCheck8(false) 
        
    }
    const handelChange8=()=>{
        setCheck7(false) 
        setCheck8(true) 
        
    }
    const handelChange9=()=>{
        setCheck9(true) 
        setCheck10(false) 
        
    }
    const handelChange10=()=>{
        setCheck9(false) 
        setCheck10(true) 
        
    }
    const handelChange11=()=>{
        setCheck12(false) 
        setCheck11(true) 
        
    }
    const handelChange12=()=>{
        setCheck11(false) 
        setCheck12(true) 
        
    }
    const handelChangea11=()=>{
        setChecka11(true) 
        setCheck22(false) 
        
    }
    const handelChange22=()=>{
        setChecka11(false) 
        setCheck22(true) 
        
    }
    const handelChange33=()=>{
        setCheck33(true) 
        setCheck44(false) 
        
    }
    const handelChange44=()=>{
        setCheck33(false) 
        setCheck44(true) 
   }
   const handelChange55=()=>{
    setCheck55(true) 
    setCheck66(false) 
    
}
const handelChange66=()=>{
    setCheck55(false) 
    setCheck66(true) 
    
}
const handelChange77=()=>{
    setCheck77(true) 
    setCheck88(false) 
}
const handelChange88=()=>{
    setCheck77(false) 
    setCheck88(true) 
}
const handelChange99=()=>{
    setCheck99(true) 
    setCheck100(false) 
}
const handelChange100=()=>{
    setCheck99(false) 
    setCheck100(true) 
}
const handelChange111=()=>{
    setCheck111(false) 
    setCheck112(true ) 
}
const handelChange112=()=>{
    setCheck111(true) 
    setCheck112(false) 
}
const handelChangedep1=()=>{
    setDep1(true) 
    setDep2(false) 
}
const handelChangedep2=()=>{
    setDep2(true) 
    setDep1(false) 
}
const handelChangearr1=()=>{
    setArr1(true) 
    setArr2(false) 
}
const handelChangearr2=()=>{
    setArr1(true) 
    setArr2(false) 
}
    const openshow=()=>{
        setShow(!show)
    }
   
    const[nmbrCarton,setNmbrCarton]=useState(0);
    const handelInputNumbers=(event)=>{
        setNmbrCarton(event.target.value)

         console.log("NmbrCarton",nmbrCarton)
    }
const[input,setInput]=useState(
[{ 
    mnt:0,
    crtlvr:0,
    crtnstndr:0,
    
}
]

);
const [total,setTotal]=useState(120);
useEffect(() => {
    
 
    setTotal(Number(120)+Number(input.mnt)+Number(input.crtlvr)*40+Number(input.crtnstndr)*50);


})
console.log('TOTAL',total )

    const handelChange=(event)=>{
        const {name,value}=event.target;
        setInput(prevInput=>{
          return  { 
            ...prevInput,
            [name]:value
        
          }
        })
    
    }
console.log("THE INPUT",input);
return(<div className="devis">
<NavFomule/>
<h1>Formule TRINKIL</h1>
<div className="formule">

<div className="marg-left"></div>
<form className="form">
<h1>Adresse </h1>
<div className="adress">
<label className=" Myborder-top">
<p className="title">Logement de départ </p>
<input className="input-style" type="text"  placeholder="Address de départ"  name="address_a"   />
</label>
<label className=" Myborder-top">
<p className="title">Logement d'arrivé </p>
    <input className="input-style" type="text"  placeholder="Address d'arrivé"  name="address_a"   />
</label>
</div>
<div  className="adress">
<label className=" Myborder-top">
<p className="title">Choisissez une date</p>
<input  className="input-style" className="input-style" type="date"/>

</label>
</div>


    <h1>Départ</h1>
    <div className="dept-wrap">
        
        <label className=" input-ckeck-box">
           

        <div className="check-box">
        <label for="scales"  className="checkbox-circle">
        <p className="title">Maison</p>
        <div className="check-circl" onClick={handelChange}></div>
        </label>
        <label for="scales" className="checkbox-circle">
        <p className="title">Appartement </p>
        <div className="check-circl" onClick={handelChange2}></div>
        </label>
        
         </div>
  </label>
  <label className=" Myborder-top">
<p className="title">Nombre d’étages </p>
<input className="input-style " type="number"  placeholder="Nombre d’étages"  name="etages"   />
</label>

<label className=" Myborder-top">
<p className="title">Monte-meubles </p>
<select className="input-style "  type="number"  placeholder="Ascenseur"  name="mnt" value={input.mnt} onChange={handelChange} >
<option label=""></option>

<option label="Non">Non</option>
<option label=" oui (7h)" value="450">Oui pour 7h</option>
<option label=" oui (1/2j)"  value="250"   >Oui pour une demie journée</option>
</select>
</label>
<label className=" Myborder-top">
<p className="title">Ascenseur</p>
<select className="input-style "  type="number"  placeholder="Ascenseur"  name="ascnsr"  >
<option label=""></option>

<option label="Non">Non</option>
<option label=" oui">Oui </option>

</select>
</label>


</div>

<div>



</div>




<div className="dept-wrap">
<label  className=" Myborder-top">
 <p className="title">Stationnement à moin 30m </p>

<select className="input-style "  type="number"  placeholder="Ascenseur"  name="ascnsr"  >
<option label=""></option>

<option label="Non">Non</option>
<option label=" oui">Oui </option>

</select>


</label>
<label className=" Myborder-top" >
    <p className="title">Distance</p>
    <input className="input-style " type="number"  placeholder="distace de stationnement"  name="distance"   />
</label>
<label  className=" Myborder-top">
 <p className="title">La Surface </p>

<input className="input-style "  type="number"  placeholder="surface en m²"  name="ascnsr"/>

</label>

<label className=" Myborder-top">
 <p className="title">Indiquer le nombre de pièces</p>
 <input className="input-style " type="number"  placeholder="Nombre de piéces"  name="pieces"   />
</label>
    
</div>

<div className="dept-wrap" >


<label className=" Myborder-top" >
<p className="title">Le nombre de cartons standards :</p>   
<input className="input-style " type="number"  placeholder="Nombre de cartons"  name="crtlvr" value={input.crtlvr} onChange={handelChange} />
</label>
<label  className=" Myborder-top">
<p className="title">Le nombre de cartons livres :</p>   
<input className="input-style " type="number"  placeholder="Nombre de cartons"  name="crtnstndr" value={input.crtnstndr} onChange={handelChange}  />
</label>

</div>





 
</form>




<div className="marg-right"></div>
</div>

    <div className="formule">
   <div className="marg-left"></div>


<form className="form">
<h1> Arrivé</h1>

    
    <div className="dept-wrap">
        
        <label className=" input-ckeck-box">
           

        <div className="check-box">
        <label for="scales"  className="checkbox-circle">
        <p className=" ">Maison</p>
        <div className="check-circl" onClick={handelChange}></div>
        </label>
        <label for="scales" className="checkbox-circle">
        <p className="title">Appartement </p>
        <div className="check-circl" onClick={handelChange2}></div>
        </label>
        
         </div>
  </label>
  <label className=" Myborder-top">
<p className="title">Nombre d’étages </p>
<input className="input-style " type="number"  placeholder="Nombre d’étages"  name="etages"   />
</label>

<label className=" Myborder-top">
<p className="title">Monte-meubles </p>
<select className="input-style "  type="number"  placeholder="Ascenseur"  name="ascnsr"  >
<option label=""></option>

<option label="Non">Non</option>
<option label=" oui (7h)">Oui pour 7h</option>
<option label=" oui (1/2j)">Oui pour une demie journée</option>
</select>
</label>
<label className=" Myborder-top">
<p className="title">Ascenseur</p>
<select className="input-style "  type="number"  placeholder="Ascenseur"  name="ascnsr"  >
<option label=""></option>

<option label="Non">Non</option>
<option label=" oui">Oui </option>

</select>
</label>


</div>

<div>



</div>




<div className="dept-wrap">
<label  className=" Myborder-top">
 <p className="title">Stationnement à moin 30m </p>

<select className="input-style "  type="number"  placeholder="Ascenseur"  name="ascnsr"  >
<option label=""></option>

<option label="Non">Non</option>
<option label=" oui">Oui </option>

</select>


</label>
<label className=" Myborder-top" >
    <p className="title">distance</p>
    <input className="input-style " type="number"  placeholder="distace de stationnement"  name="distance"   />
</label>



</div>







 




<div className="continue-wrap pos"><button>Total: {total} €</button></div>
</form>




<div className="marg-right"></div>

</div>


<div className="continue-wrap valid">
   Valider
    </div>
<Link to="/"><FaArrowCircleLeft  className="icon-choix"/></Link>
    </div>)
}
export default Devis;

/*

suivants :

Déja on a deux formules :
1.Formule chrono

Formule Zen
// Logement actuel :
Indiquer Adresse de départ
Indiquer le Type de logement : - Maison - Appartement
Indiquer le Nombre d’étages
Besoin d’un monte Meuble ? Oui / Non
Si oui afficher si c pour une demi journée ou 7H
Portage : est-il possible de stationner un camion à moins de 30m de l’entrée du logement.
Oui / Non

Indiquer la surface approximative (en m3) à déménager
Afficher le devis carton standard
Afficher le devis carton libre

Indiquer le nombre de pièces.

Indiquer inventaire de cartons / meubles (voir si le client a des carton)
oui / non
(s’il n’a pas de carton on lui affiche le lien vers le shop : acheter es cartons)

//Logement futur :
Adresse d’arrivée (votre destination)
Type de logement : - Maison - Appartement
Nombre d’étages
Portage : est-il possible de stationner un camion à moins de 30m de l’entrée du logement.
Indiquer la surface approximative (en m2) à déménager
Indiquer le nombre de pièces.
Indiquer inventaire de cartons / meubles
Date de déménagement
heure de déménagement

Formules de calcul :
Tarif initial : 120 euro HT Tarif Monte meuble : ½ journé = 250 HT euro / 7h 450 HT euro
Tarif surface approximative : 10 cartons standards => 1 m3 = 40 euro HT
15 cartons libres => 1 m3 = 50 euro HT Tarif portage : moins de 30m c 'est gratuit / au dela de 30 m il paye 15 euro

*/ 





/*

<label>
<p className="title">
est-il possible de stationner un camion à moins de 30m de l’entrée du logement?
</p>
<div className="check-box">
      <label for="scales">Oui
       <input type="checkbox" id="scales" name="monte" checked={dep1} onClick={handelChangedep1}/>
     </label>
<label for="scales">Non
            <input type="checkbox" id="scales" name="n-monte" checked={dep2} onClick={handelChangedep2}/>
  </label>

</div>






</label>



*/