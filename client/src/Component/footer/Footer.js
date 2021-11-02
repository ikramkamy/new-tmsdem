import React from 'react'
import FooterStyle from './Footer.css'
import Phone from '../../images/Groupe 136.png'
import SAV from '../../images/Groupe 138.png'
import LogoTMSDEM from '../../images/tmsdemfooterlogo.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerleft">

<div  className="tmsdemlogo"> 
<img src={LogoTMSDEM} />
</div>


                <div className="footerposition">
                    <div className="footerIcones"> <i class="fas fa-map-marker-alt"></i></div>
                    <div className="addressText"> 300 A Rue Marcel Paul, <section>94500 Champigny-sur-Marne, France </section></div>
                </div>

                <div className="footernumber">
                    <div className="footerIcones"> <img src={Phone} className="phone" /> </div>
                    <div className="addressText"> +33 1 41 77 11 32</div>
                </div>


                <div className="footeremail">
                    <div className="footerIcones"> <i class="fas fa-envelope"></i> </div>
                    <div className="addressText"> contact@tms-dem.com </div>
                </div>


                <div className="footerclientservice">
                    <div className="footerIcones"> <img src={SAV} className="sav" /> </div>
                    <div className="addressText"> Service client 7j/7</div>
                </div>

            </div>
       
        </div>
    )
}
