import React from "react";
import Styles from "./Footer.module.css";
import logo from "../../assets/images/logo2.png"

function Footer(){

    return(
        <div className={`container-fluid ${Styles.footer}`}>
            <div className={Styles.section1}>
                <div className={Styles.header}>
                    {/* <h4 className={`${Styles.homeName}`}>ESSENCE</h4> */}
                    <img src={logo} alt="" style={{height:"16px",cursor:'pointer'}}/>
                    <ul className={Styles.menu}>
                        <li className={Styles.menuLi}>Shop</li>
                        <li className={Styles.menuLi}>Blog</li>
                        <li className={Styles.menuLi}>Contact</li>
                    </ul>
                </div>
                <div className={Styles.aboutUs}>
                    <div className={Styles.itemDiv}>
                        <ul className={Styles.itemUl}>
                            <li className={Styles.menuLi}>Order Status</li>
                            <li className={Styles.menuLi}>Shipping and Delivery</li>
                            <li className={Styles.menuLi}>Privacy Policy</li>
                        </ul>
                    </div>
                    <div  className={Styles.itemDiv}>
                        <ul className={Styles.itemUl}>
                            <li className={Styles.menuLi}>Payment Options</li>
                            <li className={Styles.menuLi}>Guides</li>
                            <li className={Styles.menuLi}>Terms of Use</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className={Styles.subscribe}>SUBSCRIBE</p>
            <div  className={Styles.section2}>
                <div className={Styles.inputDiv}>
                    <input type="email" placeholder="Your email here" className={Styles.input} />
                    <button className={Styles.btn}><i aria-hidden="true" className={`fa fa-long-arrow-right ${Styles.icon}`}></i></button>
                </div>
                <div className={Styles.inputDiv}>
                    <i aria-hidden="true" className={`fa fa-facebook ${Styles.social}`}></i>
                    <i aria-hidden="true" className={`fa fa-instagram ${Styles.social}`}></i>
                    <i aria-hidden="true" className={`fa fa-twitter ${Styles.social}`}></i>
                    <i aria-hidden="true" className={`fa fa-pinterest ${Styles.social}`}></i>
                    <i  aria-hidden="true" className={`fa fa-youtube-play ${Styles.social}`}></i>
                </div>
            </div>
            <p className={Styles.end}>Copyright © All rights reserved | This template is made with <i aria-hidden="true" className={`fa fa-heart-o ${Styles.heart}`}></i> by <a href="https://colorlib.com/" className={Styles.colorlib}>Colorlib</a>
            </p>
        </div>
    )
}

export default Footer;