import React from 'react'
import Style from './Presentation.css'
import Contact from '../images/contact_Plan de travail 1.png'
import Footer from './footer/Footer'
export default function Presentation() {
    return (
        <div className="presentation">
            <h1 className="tmsdem"> TMS - DEM TEAM </h1>
            <div className="presentationContainer">
                <div className="presentationText">
                    <p> Comptant, plus de 7 ans d’experiences dans le secteur

                        du déménagement, l’équipe TMS-DEM propose
                        ses services sur toutes les régions de France. </p>


                    <p> Durant toutes ces années de travail, nous avons honorés

                        nos engagements envers des milliers de

                        clients en terme de qualité de travail, de ponctualité

                        et de responsabilité.</p>

                    <p>
                        Nos possedons notre propre équipe de déménageurs
                        et nous sommes dotés d’un matériel de déménagement

                        sophistiqué pour transporter vos affaires quelques

                        soit l’endroit ou vous habitez.
                    </p>


                    <p className="para">
                        Nos tarifs s’adaptent à tous les budgets,allant d’étudiants

                        jusqu’au professionnels. Ceci dit, quelques soit

                        le statut de nos clients, nous nous assurons qu’ils bénéficient

                        tous de la même qualité de service.
                    </p>
                </div>
            </div>


            <div className="contactContainer">
                <div className="contactContent contactImg" >
                    <img src={Contact} />
                </div>

                <div className="contactContent information">
                    <h2 className="titl"> Un service client</h2>
                    <h2>24h/24 et 7j/7</h2>

                    <div className="contactText">
                        <p>
                            Nous vous accompagnons avant, pendant et aprés
                            votre déménagement.
                            En revanche, toute remarque est la bienvenue, vous
                            pouvez nous écrire anytime en remplissant le formulaire
                            ci-dessous.
                        </p>
                    </div>
                </div>
            </div>




            <div className="formContactt">
                <h1>Faisons </h1>
                <h2> connaissance</h2>


                <div className="formContactContainer">
                    <div className="fieldContent">
                        <div className="fieldLabelContent">
                            <label> E-mail</label>
                        </div>
                        <div className="fieldInputContent">

                            <form>
                                <input />
                            </form>

                        </div>
                    </div>



                    <div className="fieldContent">
                        <div className="fieldLabelContent">
                            <label> Objet </label>
                        </div>
                        <div className="fieldInputContent">

                            <form>
                                <input />
                            </form>

                        </div>
                    </div>


                    <div className="fieldContent">
                        <div className="fieldLabelContent messageLabel">
                            <label className="messageLabel"> Message </label>
                        </div>
                        <div className="fieldInputContent textFieldContent">

                            <form>
                                <textarea />
                            </form>
                        </div>
                    </div>




                </div>

                <div className="sendButton">

<div className="sendCotent">  
                    <button> Envoyer</button>

                    </div>
                </div>
            </div>

<Footer />

        </div>
    )
}
