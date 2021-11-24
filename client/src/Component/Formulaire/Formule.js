import React, { useEffect, useState } from 'react';
import './style-form-final.css';
import { Button } from 'bootstrap';
import { FaAddressCard, FaArrowCircleLeft, FaCalendar, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import Carton from '../Carton';
import { MDBInput } from 'mdbreact';
import Ecommerce from '../Ecommerce';
import useForceUpdate from 'use-force-update';
import { jsPDF } from "jspdf";
import Pdfinvent from '../Pdfinventaire';
import './pdf.css';
import NavFomule from '../navFomule';
import logo from "../../images/logo-01.png";
import ImgDepart from '../../images/1png-02.png'
import ImgDateForm from '../../images/1png_Plan de travail 1.png'
import ImgEtage from '../../images/1png-03.png'
import AscenseurImg from '../../images/1png-04.png'
import ImgDist from '../../images/1png-05.png'
import MonteMeuble from '../../images/1png-06.png'
import Footer from '../footer/Footer';
import Comp from '../../images/Comp 1.gif'
//simport ReactTooltip from 'react-tooltip';
const Formulefinale = () => {
    const forceUpdate = useForceUpdate();
    const [showecommerce, setShowecommerce] = useState(false);
    const [box1, setBox1] = useState(false);
    const [box2, setBox2] = useState(true);

    /***************************************CALCUL DE VOLUM********************************* */
    const [volum, setVolum] = useState(false);
    const showVolum = () => {
        setVolum(!volum)
    }
    const [volmanu, setVolmanu] = useState(true);
    const [volcalc, setVolcalc] = useState(false);
    const [vol1, setVol1] = useState();
    const [vol2, setVol2] = useState();
    useEffect(() => {
        if (volmanu == true) {
            setVol2(0)
        } else { setVol2() }
    })
    useEffect(() => {
        if (volcalc == true) {
            setVol1(0)
        } else {
            setVol1();
        }
    })
    const handelVolmanu = () => {
        setVolmanu(true);
        setVolum(false);
        setVolcalc(false);
    }
    const handeVolValue = (event) => {
        setVol1(event.target.value);
        console.log("LA VALEUR DU VOLUM", vol1);
    }

    const handeVolcalc = () => {
        setVolcalc(true);
        setVolmanu(false);
    }
    /**************************************************calcult de cubage******************************************** */
    const [cubage, setCubage] = useState(0);
    const handelCubage = (data) => {
        setCubage(data);
        console.log("cubage", cubage)
        //console.log("we are getting data from chlidern",data)
        //console.log("prix de cubage",cubage*10)
        setVarchange(varchange + 1);
        forceUpdate()
    }
    /******************************************Autorisation de stationnement******************************************* */
    const [autoO, setAutoO] = useState(false);
    const [autoO2, setAutoO2] = useState(false);
    const handelauto = () => {
        setAutoO(!autoO)
    }
    const handelauto2 = () => {
        setAutoO2(!autoO2)
    }
    /*****************************************REMONTAGE DEMONTAGE************************************************* */
    const [rmntgN, setRmntgN] = useState(false);
    const [rmtgdmtg, setRmtgdmtg] = useState(false);
    const [dementaged, setDementaged] = useState(false);
    const [remontager, setRemontager] = useState(false)
    const [tarifRMNTG, setTarifRMNTG] = useState(1);
    const handelRMNT1 = () => {
        setRmntgN(true);
        setRmtgdmtg(false);
        setDementaged(false);
        setRemontager(false);
        setShowrmntg(false);
        setTarifRMNTG(1);
        setVarchange(varchange + 1);
    }
    const handelRMNT2 = () => {
        setRmtgdmtg(true);
        setRmntgN(false);
        setDementaged(false);
        setRemontager(false);
        setShowrmntg(true);
        setTarifRMNTG(2);
        setVarchange(varchange + 1);
    }
    const handelRMNT3 = () => {
        setDementaged(true);
        setRmtgdmtg(false);
        setRmntgN(false);
        setRemontager(false);
        setShowrmntg(true);
        setTarifRMNTG(1);
        setVarchange(varchange + 1);
    }
    const handelRMNT4 = () => {
        setRemontager(true);
        setRmtgdmtg(false);
        setDementaged(false);
        setRmntgN(false);
        setShowrmntg(true);
        setTarifRMNTG(1);
        setVarchange(varchange + 1);
    }
    const [showrmntg, setShowrmntg] = useState(false);
    const [simple, setSimple] = useState(0);
    const [moy, setMoy] = useState(0);
    const [complique, setComplique] = useState(0)
    const handesimple = (event) => {
        setSimple(event.target.value);
        setVarchange(varchange + 1);
    }
    const handelmoy = (event) => {
        setMoy(event.target.value);
        setVarchange(varchange + 1);
    }
    const handelComplique = (event) => {
        setComplique(event.target.value);
        setVarchange(varchange + 1);
    }
    /****************************************************************************************** */
    const handelecommerce = () => {
        setShowecommerce(!showecommerce)
    }
    const handelCheck = () => {
        setBox1(true);
        setBox2(false)
        setShowecommerce(true)
    }
    const handelCheck2 = () => {
        setBox2(true);
        setBox1(false)
        setShowecommerce(false)
    }
    /*********************************************MY CONSTANTS****************************************************************** */
    const [lieux, setLieux] = useState([{ label: "Ville", value: "Ville" }, { label: "Bordeaux", value: "Bordeaux" },
    { label: "Paris", value: "Paris" }]);
    const [etage, setEtage] = useState([{ label: "RDC", value: "0" }, { label: "1", value: "1" }, { label: "2", value: "2" }, { label: "3", value: "3" }, { label: "4", value: "4" },
    { label: "5", value: "5" }, { label: "6", value: "6" }, { label: "7", value: "7" }, { label: "8", value: "8" }, { label: "9", value: "9" }, { label: "10", value: "10" }, { label: "Plus", value: "11" },

    ])
    const [assenseur, setAssenseur] = useState([{ label: "Non", value: "0" }, { label: "1-2 personnes", value: "5" }, { label: "2-3 personnes", value: "5" },
    { label: "3-4 personnes", value: "5" }, { label: "4-5 personnes", value: "5" },
    { label: "5-6 personnes", value: "5" }, { label: "6-7 personnes", value: "5" }, { label: "7-8 personnes", value: "5" },
    { label: "Tout entre", value: "20" }])

    const [distance, setDistance] = useState([{ label: "0-10 m", value: "0" },
    { label: "10-20 m", value: "0" }, { label: "20-30 m", value: "10" }, { label: "30-40 m", value: "20" },
    { label: "40-50 m", value: "30" }, { label: "50-60 m", value: "40" }, { label: "60-70 m", value: "50" }
        , { label: "70-80 m", value: "80" }
        , { label: "80-90 m", value: "90" },
    { label: "90-100 m", value: "100" },
    { label: "plus de 101 m", value: "110" }])
    const [input, setInput] = useState([]);

    /********************************************************************************************************** */
    const handelChange = () => {

    }
    const [circlestyle, setCirclestyle] = useState("in-circle")

    const handelClickCkeck = () => {

        setCirclestyle("in-circle")
    }

    /*******************************DECLARATION DES VARIABLES N2CESSAIRE POUR LE CALCUL DE DEVIS******************************************************************************* */
    const [numetage, setNumetage] = useState(0);
    const [numetage2, setNumetage2] = useState(0);
    const [varetage, setVaretage] = useState([]);
    const [varchange, setVarchange] = useState(0)
    const [valassenseur, setValassenseur] = useState(0);
    const [valassenseur2, setValassenseur2] = useState(0);
    const [valdistance, setValdistance] = useState(0);
    const [valdistance2, setValdistance2] = useState(0);
    const [valdistancem, setValdistancem] = useState(0);
    const [valdistancem2, setValdistancem2] = useState(0);
    const [mnt, setMnt] = useState(0);
    const [mnt2, setMnt2] = useState(0);
    /********************************************Les fonction pour chaque variable******************************************************************** */
    const handelChangeall = (event) => {
        setNumetage(event.target.value);
        setVarchange(varchange + 1);
    }
    const handelChangeall2 = (event) => {
        setNumetage2(event.target.value);
        setVarchange(varchange + 1);
    }
    //console.log("LAVE VALUE",numetage);
    /*********/
    const handelChangeassens = (event) => {
        setValassenseur(event.target.value);
        setVarchange(varchange + 1);
    }
    const handelChangeassens2 = (event) => {
        setValassenseur2(event.target.value);
        setVarchange(varchange + 1);
    }
    /**********/
    const handelvaldistance = (event) => {
        setValdistance(event.target.value)
        setVarchange(varchange + 1);
        let d = 0;
        d = Math.floor(valdistance / 10)
        console.log("D", d)
        setValdistancem(d);
    }
    const handelvaldistance2 = (event) => {
        setValdistance2(event.target.value)
        setVarchange(varchange + 1);
        let d = 0;
        d = Math.floor(valdistance2 / 10)
        console.log("D", d)
        setValdistancem2(d);
    }
    //console.log("Valdistance",(valdistance));
    /************/

    const handelMnt = (event) => {
        setMnt(event.target.value);
        setVarchange(varchange + 1);
    }
    const handelMnt2 = (event) => {
        setMnt2(event.target.value);
        setVarchange(varchange + 1);
    }
    //console.log('MTN',mnt)
    /*********************************************************INPUT ********************************************************************************* */
    const [inputall, setInputall] = useState({
        numetage: 0,
    })

    /*******************************************************LA SOMME TOTALE****************************************************************************** */
    const [total, setTotal] = useState(120)
    useEffect(() => {
        setTotal(120 + Number(numetage) *
            (30 - valassenseur) +
            Number(numetage2) *
            (30 - valassenseur2) +
            Number(mnt) * 1 +
            Number(mnt2) * 1 +
            Number((Math.floor(valdistance / 10) * 40)) +
            Number((Math.floor(valdistance2 / 10) * 40)) +
            Number(cubage * 10) +
            (simple * 40) * tarifRMNTG + (moy * 60) * tarifRMNTG +
            pricart + (complique * 80) * tarifRMNTG)

    }, [varchange])
    /*************************************************VOIR LES OBJETS LOURD*******************************/
    const [lourd, setLourd] = useState(true);
    const [piono, setPiano] = useState(false);
    const [pianonum, setPianonum] = useState(0);
    const [frigo, setFrigo] = useState(false)
    const handelLourd = () => {
        setLourd(!lourd)
    }
    const handelpiano = () => {
        setPiano(!piono);

    }
    const handelfrigo = () => {
        setFrigo(!frigo)
    }

    /***************************************************************************************************/
    /*****************************************************Calcul pri carton**************************************** */
    const [pricart, setPricart] = useState(0);
    const sendPrixcarton = (data) => {
        setPricart(data);
        setVarchange(varchange + 1);
    }
    /***********************************PDF GENERATION**********************************/
    const [showpdf, setShowpdf] = useState(false);
    const generatepdf = () => {
        var doc = new jsPDF('portrait', 'pt', 'a3');
        /*
        doc.text(60,60,'Entreprise: Amogela');
        doc.text(60,40,'Télèphone:+2130.......');
        doc.text(60,20,'Email:email@gmail.com');
        doc.text(60,10,"liste");
        */
        doc.html(document.querySelector("#all"), { callback: function (pdf) { pdf.save("inventaire.pdf") } })
    }

    /***********************date get**************** */
    const [date, setDate] = useState("")
    const getDate = (event) => {
        setDate(event.target.value)

    }


    return (

        <div className="principal-formulaire">

            {showpdf && (
                <div className="modal-cart">
                <div className="pdf-stylig">
                    <div className="wrap-pdf-stylig" id="all">
                        <Pdfinvent generatepdf={generatepdf} className="wrap-pdf" >
                            <div className="header-inventaier" onClick={() => setShowpdf(false)}>&times;</div>
                            <h1 className="principale-titles invent-title">
                                <img src={logo} />
                                <div className="invent-inter">
                                    <div className="invent-item">contact@tms-dem.com</div>
                                    <div className="invent-item">+33 1 41 77 11 32</div>
                                </div>
                                <div className="invent-inter">
                                    <div className="invent-item">Service client 7j/7</div>
                                    <div className="invent-item">300 A Rue Marcel Paul,
                                        94500 Champigny-sur-Marne, France</div>
                                </div>
                            </h1>
                            <h1 className="principale-titles-pdf"> Votre demande</h1>
                            <div className="inevnt-item">
                                <div>La date de démènagement :</div>
                                <div>{date}</div>
                            </div>
                            <div className="inevnt-item">
                                <div>l'adresse de départ :</div>
                                <div>.....</div>
                            </div>
                            <div className="inevnt-item">
                                <div>l'adresse de l'arrivée:</div>
                                <div>.....</div>
                            </div>
                            <div className="inevnt-item">
                                <div>Le volume de total  calculé:</div>
                                <div>{cubage}</div>
                            </div>
                            <div className="inevnt-item"><div>Le volume de total estimé:</div><div>{vol1}</div></div>
                            <div className="inevnt-item"><div>La liste d'achat: </div></div>
                            <div className="inevnt-item" style={{ marginBottom: "50px" }}>
                                <div>Le montant total:</div>
                                <div>{total}</div>
                            </div>

                        </Pdfinvent>
                    </div>
                    <div className=" btn-formule btn-download"
                        onClick={generatepdf}>Télècharger</div>
                        </div>
                </div>)}

            <div style={{ width: "80%" }}>
                <div className="text-calcul">
                    <h1 className="projectFormTitle">Formule Soto </h1>
                    <div className="text-fomulaire">
                        Choisissez vos options et votre devis se recalcule automatiquement</div>
                </div>
            </div>
            <div className="les-champs-de-calcul">
                <div className="wrap-formulaire">

                    <div className="calcul-bloc">


                        <div className="calcul-bloc-item" id="date">
                            <h1 className="text-conatiner"> <img src={ImgDateForm} className="reficonsFORM"/> Date</h1>
                            <div className="date-wrap" >

                                <div className="dateWrapInputSoto">
                                    <input type="date" className="date-input-style" value={date} onChange={getDate} />
                                </div>
                            </div>
                        </div>


                        <div className="calcul-bloc-item" id="date">
                            <div className="inter-calcul-item">
                                <h1 className="principale-titles"> <img src={ImgDepart} className="reficonsFORM"/>Départ</h1>
                                <div className="adressContainerWrapForm">
                                    <div className="addWrapperInput">
                                        <input type="text" className="address-input" />
                                    </div>
                                </div>
                            </div>
                            <div className="inter-calcul-item">
                                <label className=" Myborder-top">
                                    <div className="title etage"> <img src={ImgEtage} className="stageImg"/>ETAGE  </div>
                                    <select value={numetage} name='numetage' onChange={handelChangeall} className="selectFormOprionSoto">
                                        {etage.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <div className="title">
                                        <Link to="/depart" className="tip-distance1">
                                            <div className="">
                                            </div>
                                        </Link>
                                    </div >
                                </label>
                                <label className=" Myborder-top">
                                    <div className="title ascenseur"> <img src={AscenseurImg} className="stageImg" /> ASCENSEUR</div>
                                    <select value={valassenseur} name="valassenseur" onChange={handelChangeassens} className="selectFormOprionSoto">
                                        {assenseur.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <div className="title">
                                        <Link to="/depart" className="tip-distance1">
                                            <div className="">
                                            </div>
                                        </Link>
                                    </div>
                                </label>
                                <label className=" Myborder-top">
                                    <div className="title distance" > <img src={ImgDist} className="stageImg" />  DISTANCE</div>

                                    <select value={valdistance} name="valdistance" onChange={handelvaldistance} className="selectFormOprionSoto" >
                                        {distance.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <div className="title  flexstart" >
                                        <Link to="/depart" className="tip-distance1">Plus d'information
                                            <div className="tooltip-styling">
                                                Nombre de métres au RCD entre votre hall d'immeuble et l'emplacement de stationnement le plus proche pour le camion(accès facile, fond de cours,jardin à traverser,immeuble de résidence etc...
                                            </div>
                                        </Link>
                                    </div>
                                </label>
                                <label className=" Myborder-top">
                                    <div className="title monteMeuble" > <img src={MonteMeuble}  className="stageImg"/> MONTE-MEUBLES </div>
                                    <select type="number" placeholder="Monte-meuble" name="mnt" className="selectFormOprionSoto" value={mnt} onChange={handelMnt}>
                                        <option label="Non" value="0">Non</option>
                                        <option label=" oui (7h)" value="450">Oui pour 7h</option>
                                        <option label=" oui (1/2j)" value="250">Oui pour une demie journée</option>
                                    </select>
                                    <div className="title flexstart">
                                        <Link className="tip-mont-meuble1">
                                            Plus d'information
                                            <div className="tooltip-styling-monte-meuble1">
                                                Lors du démenagement, il arrive parfois que l'absence
                                                d'ascensseur ou l'étroitesse de la cage d'escalier oblige
                                                à passer le mobilier par la fenetre avec un appreil
                                                de levage appelé Monte-meuble.
                                            </div>
                                        </Link>
                                    </div>
                                </label>




                            </div>
                            <div className="inter-calcul-item big-titles mrgntop0px">
                                <span className="tit-big-second" style={{ textDecoration: "none", marginRight: "10px", fontWeight: "200" }}>
                                    Avez-vous besoin d'une
                                </span>
                                <span className="tit-big-second autorisationSpan">autorisation de stationnement </span>  <span className="tit-big-second">? </span>
                            </div>

                            <div className="title" style={{ alignItems: "flex-start", marginLeft: "5.5%" }}>
                                <Link className="tip-auton-01"> <span> Plus d'information </span>
                                    <div className="tooltip-styling-auton1">
                                        Si vous habitez en ville il est possible
                                        que le camion se gare dans la rue.Selon votre commune
                                        une autorisation de stationnement est peut être nécessaire.
                                    </div>

                                </Link>
                            </div>



                            <div className="inter-calcul-item  check-yes-no">
                                <div className="wrap-yes-no">
                                 
                                    <div> 
                                    <input  type="radio" label="Oui"  id="autoo" checked value="Oui" name="rdB" onChange={handelauto} checked={autoO} />
                                    <label for="Oui">Oui</label>
                                    </div>

                                    <div>
                                    <input  type="radio" label="Non"  id="autoo" value="Non" name="rdB" onChange={handelauto} checked={!autoO} />
                                    <label for="Non">Non</label>
                                    </div>
                                  
{
/*
  <MDBInput label="oui" type="checkbox" id="autoo" checked={autoO} onChange={handelauto} />
                                    <MDBInput label="Non" type="checkbox" id="auton" checked={!autoO} onChange={handelauto} />
*/ 
}
                                  

                                </div>
                            </div>
                        </div>



                        <div className="calcul-bloc-item">
                            <div className="inter-calcul-item">
                                <h1 className="principale-titles"> <img src={ImgDepart} className="reficonsFORM"/>Arrivé</h1>
                                <div className="adressContainerWrapForm">
                                    <div className="addWrapperInput">
                                <input type="text" className="address-input" />
</div>
</div>
                            </div>
                            <div className="inter-calcul-item">
                                <label className=" Myborder-top">
                                    <div className="title etage">  <img src={ImgEtage} className="stageImg"/> ETAGE </div>
                                    <select value={numetage2} name='numetage2' className="selectFormOprionSoto" onChange={handelChangeall2}>
                                        {etage.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <div className="title flexstart">
                                        <Link to="/depart" className="tip-distance1">
                                            <div className="">
                                            </div>
                                        </Link>
                                    </div>
                                </label>
                                <label className=" Myborder-top">
                                    <div className="title ascenseur"> <img src={AscenseurImg} className="stageImg" /> ASCENSEUR</div>
                                    <select value={valassenseur2} name="valassenseur2" className="selectFormOprionSoto" onChange={handelChangeassens2}>
                                        {assenseur.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <div className="title .flexstart">
                                        <Link to="/depart" className="tip-distance1">
                                            <div className="">
                                            </div>
                                        </Link>
                                    </div>
                                </label>
                                <label className=" Myborder-top">
                                    <div className="title distance">  <img src={ImgDist} className="stageImg" /> DISTANCE</div>
                                    <select value={valdistance2} name="valdistance2"  className="selectFormOprionSoto" onChange={handelvaldistance2} >
                                        {distance.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                        ))}
                                    </select>
                                    <div className="title flexstart">
                                        <Link to="/depart" className="tip-distance1">Plus d'information
                                            <div className="tooltip-styling">
                                                Nombre de métres au RCD entre votre hall d'immeuble et l'emplacement de stationnement le plus proche pour le camion(accès facile, fond de cours,jardin à traverser,immeuble de résidence etc...
                                            </div>

                                        </Link>

                                    </div>
                                </label>
                                <label className=" Myborder-top">
                                    <div className="title monteMeuble"> <img src={MonteMeuble}  className="stageImg"/> MONTE-MEUBLES</div>
                                    <select type="number" placeholder="Ascenseur" name="mnt2" value={mnt2} className="selectFormOprionSoto" onChange={handelMnt2} >
                                        <option label="Non" value="0">Non</option>
                                        <option label=" oui (7h)" value="450">Oui pour 7h</option>
                                        <option label=" oui (1/2j)" value="250"   >Oui pour une demie journée</option>
                                    </select>
                                    <div className="title flexstart">

                                        <Link to="/depart" className="tip-mont-meuble1">Plus d'information
                                            <div className="tooltip-styling-monte-meuble1">
                                                Lors du démenagement, il arrive parfois que l'absence d'ascensseur ou l'étroitesse de la cage d'escalier oblige à passer le mobilier par la fenetre avec un appreil de levage appelé Monte-meuble.
                                            </div>
                                        </Link>
                                    </div>
                                </label>




                            </div>
                            <div className="inter-calcul-item big-titles">
                                <span className="tit-big-second"
                                    style={{ textDecoration: "none", marginRight: "10px", fontWeight: "200" }}>
                                    Avez-vous besoin d'une
                                </span>
                                <span className="tit-big-second  autorisationSpan">autorisation de stationnement </span>
                                <span className="tit-big-second"> ? </span>
                                
                                </div>

                            <div className="title flexstart" style={{ alignItems: "flex-start", marginLeft: "5.5%" }}>
                                <Link className="tip-auton-01">
                                    Plus d'information
                                    <div className="tooltip-styling-auton1">
                                        Si vous habitez en ville il est possible que le camion
                                        se gare dans la rue.Selon votre commune une autorisation
                                        de stationnement est peut être nécessaire.
                                    </div>

                                </Link>
                            </div>


                            <div className="inter-calcul-item  check-yes-no">
                                <div className="wrap-yes-no">
                                <div > 
                                    <input  type="radio" label="Oui"  id="autoo2" value="oui" name="rdBA" checked={autoO2} /*checked={autoO}*/ onChange={handelauto2} />
                                    <label for="Oui">Oui</label>
                                    </div> 

                                    <div  >
                                    <input  type="radio" label="Non"  id="autoo2" value="non" name="rdBA" checked={!autoO2}  /* checked={autoO} */ onChange={handelauto2} />
                                    <label for="Non">Non</label>
                                    </div>

{
    /*
     <MDBInput label="oui " type="checkbox" id="autoo2" checked={autoO2} onChange={handelauto2} />
                                    <MDBInput label="Non" type="checkbox" id="auton2" checked={!autoO2} onChange={handelauto2} />
    
    */ 
}
                                   
                                
                                
                                
                                </div>
                            </div>

                        </div>
                        <div className="calcul-bloc-item volumeItemBloc">
                            <div className="inter-calcul-item">
                                <h1 className="principale-titles">
                                    Votre volume
                                </h1>
                            </div>

                            <div className="inter-calcul-item">
                                <div className="text-fomulaire volumes">
                                    Une bonne
                                    estimation du volume est un élément clé pour éviter les mauvaises surprises le jour J.<br />
                                    Nos conseillers sont à votre disposition.
                                </div>
                            </div>
                            <div className="inter-calcul-item ">
                                <div className="wrap-volum-items">
                                    <div className="wrap-volum-items-inter">
                                        <div className="mdbinput">

                                        <div className="volumeInputBloc"> 
                                    <input  type="radio" label="Volume renseigné manuellement"  checked={volmanu} id="volummanu" value="oui" name="rdB2" /*checked={autoO}*/ onChange={handelVolmanu}  />
                                    <label for="Oui">Volume renseigné manuellement</label>
                                    </div>

                                    {/*
                                     <MDBInput type="checkbox" label="Volume renseigné manuellement"
                                                checked={volmanu} id="volummanu" onChange={handelVolmanu} />
                                                
                                    */ }
                                           
                                                
                                                
                                                </div>

                                    </div>
                                    <div className="wrap-inout-volume">
<div className="volumeInputBloc">


                                        <input className="input-vol" type="number" name="vol1" value={vol1}  checked={!volmanu} onChange={handeVolValue} style={{fontSize:"1em"}} />
                                        <span className="unit-vol" style={{ marginLeft: "5px" }}>m<sup>3</sup></span>
                                        </div>         
                                    </div>

                                </div>
                            </div>

                            <div className="inter-calcul-item ">
                                <div className="wrap-volum-items">
                                    <div className="wrap-volum-items-inter">
                                        <div className="mdbinput">

                                        <div className="volumeInputBloc"> 
                                    <input  type="radio" label="Volume estimé avec notre calculateur de volume"  id="volcalc" value="oui" name="rdB2" /*checked={autoO}*/ onChange={handelVolmanu}  />
                                    <label for="Volume estimé avec notre calculateur de volume">Volume estimé par le calculateur</label>
                                    </div>



{
    /*
 <MDBInput type="checkbox"
                                                label="Volume estimé avec notre super calculateur de volume"
                                                checked={volcalc} id="volcalc" onChange={handeVolcalc} />

    */
}
                                           
                                                
                                                </div>
                                    </div>
                                    <div className="unitVolumCalc"> 
                                        <input className="input-vol" type="number" name="vol2" value={cubage} style={{fontSize:"1em"}} />
                                        <span className="unit-vol" style={{ marginLeft: "5px" }}>m<sup >3</sup></span>
                                    </div>

                                </div>

                                <div className="btn-formule" style={{ marginLeft: "5px" }} onClick={showVolum}>
                                    Calculateur de volume
                                </div>
                            </div>



                        </div>

                        {volum && (<Carton showVolum={showVolum} handelCubage={handelCubage} />)}




                    </div>
                    {/*<div className="calcul-montant">
<p>DÉMÉNAGEMENT CLASSIQUE <br/> 695 km · 25 m3</p>

  <div className="total-formulaire"><div>Total:</div>
  <div>120 €</div>
  </div> 
   </div>*/}

                </div>
                <p className="width90" id="objL">
                    Possédez-vous des objets lourds ?</p>
                <div className="wrap-formulaire">
                    <div className="calcul-bloc">
                        <div className="calcul-bloc-item" style={{border:"1px hidden black", overflow:"hidden"}}>
                            <div className="inter-calcul-item  check-yes-no">
                                <div className="wrap-check-yes-no">
                                    <div className="mdbinputSpace">

                                    <div className="wrap-yes-no-aide">
                                <div> 
                                    <input  type="radio" label="Oui"  id="autoo2" value="oui" name="rdB3" checked={lourd} /*checked={autoO}*/ onChange={handelLourd} />
                                    <label for="Oui">Oui</label>
                                    </div>

                                    <div>
                                    <input  type="radio" label="Non"  id="autoo2" value="non" name="rdB3" checked={!lourd}  /* checked={autoO} */ onChange={handelLourd} />
                                    <label for="Non">Non</label>
                                    </div>
</div>



                                       { /*<MDBInput label="oui" type="checkbox" id="louro" checked={lourd} onChange={handelLourd} /> */}
                                   
                                   
                                   
                                    </div>
                                    {/*<div className="mdbinput">
                                        <MDBInput label="Non" type="checkbox" id="louron" checked={!lourd} onChange={handelLourd} />
</div> */}
                                </div>
                            </div>

                        </div>
                        {lourd && (
                            <div className="inter-calcul-item  dsplyclmn" style={{marginTop: "-50px"}}>
                                <div className="mdbinput">
                                <div style={{display:"flex"}}> 
                                    <input  type="radio" label="Piano"  id="piano" value="Piano" name="rdB5" checked={piono}/*checked={autoO}*/ onChange={handelpiano} />
                                    <label for="Piano">Piano</label>
                                    </div>
                                </div>

                                <div className="mdbinput">
                                <div style={{display:"flex"}}> 
                                    <input  type="radio" label="Frigo" id="frigo" value="Frigo" name="rdB5" checked={piono}/*checked={autoO}*/ onChange={handelpiano} />
                                    <label for="Frigo">Frigo</label>
                                    </div>



{/** <MDBInput type="checkbox" checked={frigo}
                                        label="Frigo Américain" id="frigo"
                                        onChange={handelfrigo} /> */}
                                    





                                </div>
                            </div>
                        )
                        }</div>
                    {/*<div className="calcul-montant"></div>*/}
                </div>
                <p className="width90">
                    Avez-vous besoin d'aide pour le démontage
                    et le remontage de votre mobilier ?</p>
                <div className="wrap-formulaire">
                    <div className="calcul-bloc">
                        <div className="calcul-bloc-item">
                            <div className="inter-calcul-item dsplyclmn">
                                <div className="mdbinput">
                                <div style={{display:"flex"}}> 
                                    <input  type="radio" label="Aucune aide" id="rmntgN" value="Aucune aide" name="rdB6" checked={rmntgN} /*checked={autoO}*/ onChange={handelRMNT1} />
                                    <label for="Aucune aide">Aucune aide</label>
                                    </div>

                                   { /*<MDBInput label="Aucune aide" type="checkbox" id="rmntgN" checked={rmntgN} onChange={handelRMNT1} /> */}
                                
                                
                                
                                
                                </div>

                                <div className="mdbinput">

                                <div style={{display:"flex"}}> 
                                    <input  type="radio" label="Démontage et remontage" id="rmtgdmtg" value="Démontage et remontage" name="rdB6" checked={rmtgdmtg} /*checked={autoO}*/ onChange={handelRMNT2} />
                                    <label for="Démontage et remontage"> Démontage et remontage</label>
                                    </div>

                                    {/*<MDBInput label="Démontage & remontage" type="checkbox" id="rmtgdmtg" checked={rmtgdmtg} onChange={handelRMNT2} />*/}
                               
                               
                               
                                </div>

                                <div className="mdbinput">
                                <div style={{display:"flex"}}> 
                                    <input  type="radio" label="Démontage seul" id="dementaged" value="Démontage seul" name="rdB6" checked={dementaged}  /*checked={autoO}*/ onChange={handelRMNT3} />
                                    <label for="Démontage seul"> Démontage seul</label>
                                    </div>



                                   {/* <MDBInput label="Démontage seul" type="checkbox" id="dementaged" checked={dementaged} onChange={handelRMNT3} /> */}
                             
                             
                             
                                </div>
                                <div className="mdbinput">

                                <div style={{display:"flex"}}> 
                                    <input  type="radio" label="Remontage seul" id="remontager" value="Démontage seul" name="rdB6" checked={remontager}  /*checked={autoO}*/ onChange={handelRMNT4} />
                                    <label for="Remontage seul"> Remontage seul</label>
                                    </div>


                               {   /*  <MDBInput label="Remontage seul" type="checkbox" id="remontager" checked={remontager} onChange={handelRMNT4} />*/}
                               
                               
                               
                               
                               
                                </div>
                            </div>



                            {showrmntg && (
                                <div className="inter-calcul-item RMNTG ">
                                    <div className="title-RMNTG">Simple</div>
                                    <div className="content-RMNTG">
                                        <div className="text-RMNTG">
                                            Bureau simple, commode de taille moyenne, étagère simple, lit simple, lit bébé, placard (décrochage), table...</div>
                                        <input type="Number" min="0" className="input-RMNTG" name="simple" value={simple} onChange={handesimple} />
                                    </div>

                                </div>
                            )}
                            {showrmntg && (
                                <div className="inter-calcul-item RMNTG ">

                                    <div className="title-RMNTG">Moyen</div>
                                    <div className="content-RMNTG">
                                        <div className="text-RMNTG">Armoire 2 portes, buffet plusieurs blocs, bureau d'angle, canapé, etagère, grande commode, lit mezzanine simple, living plusieurs blocs...</div>
                                        <input type="Number" min="0" className="input-RMNTG" name={moy} value={moy} onChange={handelmoy} />
                                    </div>

                                </div>
                            )}
                            {showrmntg && (
                                <div className="inter-calcul-item RMNTG ">

                                    <div className="title-RMNTG">Compliquée</div>
                                    <div className="content-RMNTG">
                                        <div className="text-RMNTG">Armoire 3 portes et plus, armoire pont, armoire lit, bibliothèque, buffet, bahut, grande, vitrine, lit mezzanine 2 personnes, lit combiné avec bureau, living, vaisselier</div>
                                        <input min="0" type="Number" className="input-RMNTG" name={complique} value={complique} onChange={handelComplique} />
                                    </div>

                                </div>
                            )}

                        </div>


                    </div>

                </div>
                <p className="width90">
                    Avez-vous besoin de fournitures pour votre déménagement?
                </p>
                <div className="wrap-formulaire">
                    <div className="calcul-bloc" >
                        <div className="calcul-bloc-item" >
                            <div className="inter-calcul-item">
                                <div className="wrap-check-yes-no">
                                    <div className=" mdbinput" style={{ marginBottom: "30px" }}>


                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="Oui" id="checkbox1" value="Oui" name="rdB7" checked={box1}  /*checked={autoO}*/ onChange={handelCheck} />
                                    <label for="Oui"> Oui</label>
                                    </div>



                                      { /* <MDBInput label="oui" type="checkbox" id="checkbox1" checked={box1} onChange={handelCheck} />*/}
                                 
                                 
                                 
                                    </div>
                                    <div className=" mdbinput" style={{ marginBottom: "30px" }}>


                                    <div style={{display:"flex"}}> 
                                    <input  type="radio" label="Non" id="checkbox2" value="Oui" name="rdB7" checked={box2}  /*checked={autoO}*/ onChange={handelCheck2} />
                                    <label for="Non"> Non</label>
                                    </div>



                                      {  /*<MDBInput label="Non" type="checkbox" id="checkbox2" checked={box2} onChange={handelCheck2} />*/}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {showecommerce && (<Ecommerce sendPrixcarton={sendPrixcarton} id="ecommerce" />)}


                    </div>

                    {/*
<div className="calcul-montant">
<p>DÉMÉNAGEMENT CLASSIQUE <br/> 695 km · 25 m3</p>
<div className="total-formulaire"><div>Total:</div>
<div>120 €</div>
</div> 

        
        
</div> */}
                </div>

                <p className="width90">Options libres</p>
                <div className="width90-2-center">
                    <p className="width90-2" style={{fontFamily:"Roboto Slab', serif"}}>
                        Quelques exemples :
                        <br />
                        <ul>
                            <li style={{ marginLeft: "10px" }}>1- Garde-meubles/stockage,</li>
                            <li style={{ marginLeft: "10px" }}>2- Livrer ou récupérer du mobilier à une autre adresse,</li>
                            <li style={{ marginLeft: "10px" }}>3- Transporter un objet spécifique (très lourd, très fragile, ou de grande valeur),</li>
                        </ul>
                        <br />
                      <div style={{fontFamily:"Roboto Slab', serif", fontSize:"1em", fontWeight:"400"}}>  Nous reviendrons vers vous avec un tarif dans un délai de 24h00 ouvrées. Pensez à nous laisser vos coordonnées (en créant votre compte) afin que nous puissions vous contacter si nous avons des questions. </div>
                    </p>
                </div>


<div className="spaceCommentClient">
                <p className="width90" style={{marginTop:"4px"}}>Commentaires</p>
                <div className="width90-2-center">
                    <p className="width90-2">
                        <div className="text-fomulaire" style={{fontFamily:"Roboto Slab', serif", fontSize:"1.1em", marginTop:"-5px"}}>
                            Faites-nous part de tout ce qui est important pour vous.
                            Ces informations seront ajoutées sur le devis entre vous
                            et le déménageur sélectionné.
                        </div>
                    </p>
                </div>
                <div className="wrap-formulaire">
                    <div className="calcul-bloc">

                        <div className="calcul-bloc-item" style={{background: "#f3f3f3", border:"none" }}>

                            <div className="inter-calcul-item">

                                <textarea type="text" className="input-commantaires" />
                            </div>

                            <div> 
                                <button className="envoyerCommentButton"> Envoyer</button>
                            </div>
                        </div>
                    </div>

                    {/*<div className="calcul-montant"></div>*/}
                </div>

                </div>

            </div>

            <div className="calcul-montant tot" style={{border: "1px hidden red", background:"rgba(44,33,111,0.1)", color:"rgb(44,33,111)"}}><p>DÉMÉNAGEMENT SOTO<br /></p>

                <div className="total-formulaire" style={{border:"none"}}>
                    <div style={{fontSize:"1.3em", fontWeight:"600", color:"rgb(44,33,111)", border:"none", fontSize:"1.77em", marginTop:"-30px"}}>Total: {total} €</div>

                </div>
                <div className=" btn-formule btn-download" style={{border:"1px hidden black", width:"250px", background:"#ED1C24", color:"white"}}
                    onClick={() => setShowpdf(!showpdf)}>Voir l'inventaire</div>
                {/*<p>voir les variables et la formule:</p>
etage:{numetage} <br/>
la distace:{valdistance} <br/>
le résultat de la division euclidienne:{Math.floor(valdistance/10)} <br/>
le monte-meuble:{mnt}<br/>
moy:{moy}<br/>
simple:{simple}<br/>
complique:{complique}<br/>*/}
            </div>

            <Footer className="footSotoPage" style={{zIndex : "-10000"}}/>
        </div>)
}
export default Formulefinale;
