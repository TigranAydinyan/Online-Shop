import React from "react";
import Styles from "./Contact.module.css";
import Footer from "../Footer/Footer";

function Contact(){
    return(
        <div style={{marginTop:"84px"}}>
            <div className="d-flex">
                <div className={Styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12081.609555883388!2d44.5222705!3d40.7971506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b3461102da5ad34!2sVanadzor%20Technological%20Center!5e0!3m2!1sen!2s!4v1649152652464!5m2!1sen!2s"  
                style={{border:"0",
                width:"100%",
                height:"100%"
                }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={Styles.contact}>
                    <h2 className={Styles.title}>How to Find Us</h2>
                    <p className={Styles.text}>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.</p>
                    <div className="d-flex mt-5">
                        <div style={{marginRight:"50px"}}>
                        <p className={Styles.address}>ADDRESS:</p>
                        <p className={Styles.address}>TELEPHONE:</p>
                        </div>
                        <div>
                        <p className={Styles.contactUs}> 10 Suffolk st Soho, London, UK</p>
                        <p className={Styles.contactUs}> +12 34 567 890</p>
                        </div> 
                    </div>
                    <p style={{paddingTop:"100px"}}>
                        <a  href="mailto:contact@essence.com" className={Styles.mailto}>contact@essence.com</a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;