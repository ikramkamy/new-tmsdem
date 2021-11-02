import React from 'react'
import './Home.css'
import Pro from '../images/icons/1.png'
import Etudiant from '../images/icons/2.png'
import Camion from '../images/icons/3.png'
import ImgSlide from '../images/image1.png'
import Avion from '../images/icons/4.png'
import PlanificationTimeLine from '../images/planificationTimeLine.png'
import TmsDemImage from '../images/tmsdemPicture.png'
import Icon_Plan from '../images/icon_Plan de travail 1.png'
import Trace from '../images/2.png'
import Step2 from '../images/step2.png'
import Step3 from '../images/step3.png'
import Footer from './footer/Footer'
import Nav from './navBar/NavBar'
export default function Home() {
    return (

    
        <div className="Home">
              <Nav />  
            <div className="smallImg">
                <img src={TmsDemImage} />
            </div>
            <div className="slideImage">
                <img src={ImgSlide} />

                <div className="titleSlide">
                    <h1> Nos</h1>
                    <h2> déménageurs</h2>
                    <h3> au service de</h3>
                    <h1 className="votre"> votre</h1>
                    <h2 className="demenagement"> déménagement</h2>
                </div>



            </div>



            <div className="textFiled">
                <p>
                    L’envie de déménager résulte dans 95% des cas d'un désir profond de changement
                    grâce auquel vous pouvez repartir du bon pied à la conquête de nouvelles opportunités pour une vie prospère. TMS-DEM vous aide à faire le premier pas en transportant vos affaires en toute sécurité partout en France ou dans les quatres coins du monde.

                </p>
            </div>



            <div className="servicesTMSDEM">
                <div className="serviceContent">
                    <div className="serviceContainer">
                        <h2> Déménagement PRO</h2>
                        <div className="imgContent">
                            <img src={Pro} className="proimg" />
                        </div>
                    </div>

                    <div className="serviceContainer">

                        <h2> Déménagement
                            Étudiant </h2>
                        <div className="imgContent Studentimgs">
                            <img src={Etudiant} className="iconStudent" />
                        </div>

                    </div>

                    <div className="serviceContainer">

                        <h2> Déménagement
                            longue distance </h2>
                        <div className="imgContent Studentimgs">
                            <img src={Camion} className="iconStudent" />
                        </div>


                    </div>

                    <div className="serviceContainer">
                        <h2> Déménagement
                            international</h2>
                        <div className="imgContent Studentimgs">
                            <img src={Avion} className="iconStudent" />
                        </div>

                    </div>
                </div>
            </div>


            <div className="planificationStep">
                <div className="planificationTitle">
                    <h1> Planifiez Votre</h1>
                    <h2> Déménagement Maintenant </h2>
                </div>
            </div>






            <div className="planificationTimeLine">

                <div className="planificationLeftSide">
                    <img src={PlanificationTimeLine} />

                    <div className="buttonBox">
                        <div>  Je déménage  </div>
                    </div>
                </div>


                <div className="planificationRightSide">
                    <div className="step">

                        <div className="descriptionPlanification">
                            <div> Personnalisez en quelques clics votre déménagement</div>
                        </div>

                        <div className="illustration">
                            <div> <img src={Icon_Plan} /> </div>
                        </div>

                    </div>

                    <div className="step">

                        <div className="descriptionPlanification">
                            <div> Précisez la date et l’heure qui vous conviennent</div>
                        </div>

                        <div className="illustration">
                            <div> <img src={Step2} /> </div>
                        </div>


                    </div>
                    <div className="step">


                        <div className="descriptionPlanification text3">
                            <div>  Jour J : nos déménageurs seront en place pour transporter vos affaires jusqu’à votre nouvelle déstination</div>
                        </div>

                        <div className="illustration">
                            <div> <img src={Step3} /> </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="buttonAction">

                <div className="button">
                    <button className="button2"> Boutique  </button>
                </div>

                <div className="button">
                    <button > Location espace stockage </button>
                </div>

            </div>


            <div className="testimonial">
                <h1> Ils témoignent</h1>

                <div className="slider">
                    <div className="controllButton">
                        <div>
                            <p> / </p>
                        </div>
                    </div>
                    <div className="sliderContent">
                        <div className="stars">

                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>


                        </div>

                        <div className="testimonialName">
                            <div> Lina Fakhoury </div>
                        </div>
                        <div className="testimonialText">
                            <div> Surprise très positive! Un service rapide, efficace. Je recommande! </div>

                        </div>
                    </div>

                    <div className="controllButton">
                        <div>
                            <p> / </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer  className="footerComponent"/>
        </div>

    )
}
