import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Styles from "./Checkout.module.css";

function Checkout(){
    // const [active,setActive] = useState(false);
    const [pay,setPay] = useState({
        cards : [
            {   
                id: 0,
                name: "PAYPAL",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integ er bibendum sodales arcu id te mpus. Ut consectetur lacus.",
                active: false
            },
            {
                id: 1,
                name: "CASH ON DELIEVERY",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo quis in veritatis officia inventore, tempore provident dignissimos.",
                active: false
            },
            {
                id: 2,
                name: "CREDIT CARD",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quo sint repudiandae suscipit ab soluta delectus voluptate, vero vitae",
                active: false
            },
            {
                id: 3,
                name: "DIRECT BANK TRANSFER",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cum autem eveniet saepe fugit, impedit magni.",
                active: false
            }
        ]
    })
    const cardClick = (id) => {
      return  setPay(state => {
                    return {...state,
                        cards: state.cards.map(v => id === v.id ? {...v, active: !v.active} : {...v, active: false})
                    }
       })
    }
    return(
        <div className={Styles.container}>
            <div className={Styles.BgImg}>
                <div className={Styles.backImg}></div>
                <h2 className={Styles.title}>CHECKOUT</h2>
            </div>
            <div className={`container  ${Styles.check}`}>
                <div className={Styles.details}>
                    <div>
                        <h5 className={Styles.h5}>Billing Address</h5>
                    </div>
                    <div className={`row mt-5`}>
                        <div className={`col-6 ${Styles.name}`}>
                            <label htmlFor="name" className={Styles.label}>FIRST NAME<span className={Styles.span}>*</span></label>
                            <input type="text" id="name" className={Styles.input} /> 
                        </div>
                        <div className={`col-6 ${Styles.name}`}>
                            <label htmlFor="lastName" className={Styles.label}>LAST NAME<span className={Styles.span}>*</span></label>
                            <input type="text" id="lastName" className={Styles.input} /> 
                        </div>
                        <div className={`col-12 ${Styles.name}`}>
                            <label htmlFor="companyName" className={Styles.label}>COMPANY NAME</label>
                            <input type="text" id="companyName" className={Styles.input} /> 
                        </div>
                        <div className={`col-12 ${Styles.name}`}>
                            <label htmlFor="select" className={Styles.label}>COUNTRY<span className={Styles.span}>*</span></label>
                            <select id="select" className={Styles.selectBox}>
                                <option className={Styles.option} defaultChecked>United States</option>
                                <option className={Styles.option}>United Kingdom</option>
                                <option className={Styles.option}>Germany</option>
                                <option className={Styles.option}>France</option>
                                <option className={Styles.option}>India</option>
                                <option className={Styles.option}>Australia</option>
                                <option className={Styles.option}>Brazil</option>
                                <option className={Styles.option}>Canada</option>
                            </select>
                        </div>
                        <div className={`col-12 ${Styles.name}`}>
                            <label htmlFor="address" className={Styles.label}>ADDRESS<span className={Styles.span}>*</span></label>
                            <input type="text" id="address" className={Styles.input} /> 
                            <input type="text" className={`${Styles.input} mt-3`} /> 
                        </div>
                        <div className={`col-12 ${Styles.name}`}>
                            <label htmlFor="postcode" className={Styles.label}>POSTCODE<span className={Styles.span}>*</span></label>
                            <input type="text" id="postcode" className={Styles.input} /> 
                        </div>
                        <div className={`col-12 ${Styles.name}`}>
                            <label htmlFor="city" className={Styles.label}>TOWN/CITY<span className={Styles.span}>*</span></label>
                            <input type="text" id="city" className={Styles.input} /> 
                        </div>
                        <div className={`col-12 ${Styles.name}`}>
                            <label htmlFor="province" className={Styles.label}>PROVINCE<span className={Styles.span}>*</span></label>
                            <input type="text" id="province" className={Styles.input} /> 
                        </div>
                        <div className={`col-12 ${Styles.name}`}>
                            <label htmlFor="phone" className={Styles.label}>PHONE NO<span className={Styles.span}>*</span></label>
                            <input type="TEL" id="phone" className={Styles.input} /> 
                        </div>
                        <div className={`col-12 ${Styles.name}`}>
                            <label htmlFor="email" className={Styles.label}>EMAIL ADDRESS<span className={Styles.span}>*</span></label>
                            <input type="email" id="email" className={Styles.input} /> 
                        </div>
                        <div className={`col-12 ${Styles.ckeckbox}`}>
                            <label htmlFor="terms" className={Styles.checkboxLabel}> <input type="checkbox" id="terms" className={Styles.checkboxInput} style={{textAlign:"center"}} /><span className={Styles.checkSpan}></span> <span className={Styles.labelSpan}>TERMS AND CONITIONS</span></label>
                        </div>
                        <div className={`col-12 ${Styles.ckeckbox}`}>
                            <label htmlFor="create" className={Styles.checkboxLabel}> <input type="checkbox" id="create" className={Styles.checkboxInput} style={{textAlign:"center"}} /><span className={Styles.checkSpan}></span> <span className={Styles.labelSpan}>CREATE AN ACCOUT</span></label>
                        </div>
                        <div className={`col-12 ${Styles.ckeckbox}`}>
                            <label htmlFor="subscribe" className={Styles.checkboxLabel}> <input type="checkbox" id="subscribe" className={Styles.checkboxInput} style={{textAlign:"center"}} /><span className={Styles.checkSpan}></span> <span className={Styles.labelSpan}>SUBSCRIBE TO OUR NEWSLETTER</span></label>
                        </div>
                    </div>
                </div>
                <div className={Styles.order}>
                    <div>
                        <h5 className={`${Styles.h5} mb-4`}>Your Order</h5>
                        <p className={Styles.text}>The Details</p>
                        <div className={Styles.orderDetails}>
                            <ul className={Styles.orderDetailsForm}>
                                <li>
                                    <span>PRODUCT</span>
                                    <span>TOTAL</span>
                                </li>
                                <li>
                                    <span>COCKTAIL YELLOW DRESS</span>
                                    <span>$59.90</span>
                                </li>
                                <li>
                                    <span>SUBTOTAL</span>
                                    <span>$59.90</span>
                                </li>
                                <li>
                                    <span>SHIPPING</span>
                                    <span>FREE</span>
                                </li>
                                <li>
                                    <span>TOTAL</span>
                                    <span>$59.90</span>
                                </li>
                            </ul>
                        </div>
                        <div className={Styles.checkCards}>
                            {pay.cards.map((v,i) => 
                            <div key={i} className={`mb-2 ${Styles.card}`}>
                                <div className={Styles.cardDiv}  onClick={() => cardClick(v.id)}>
                                    <div className={Styles.round}></div>
                                    <div className={Styles.cardNameSpace}>
                                        <h6 className={Styles.cardName}>{v.name}</h6>
                                    </div>
                                </div>
                                <div className={v.active? Styles.loremDivVisible : Styles.loremDiv}>
                                    <p className={Styles.lorem}>{v.text}</p>
                                </div>
                            </div>
                            )}
                        </div>
                        <button className={Styles.btn}>PLACE ORDER</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Checkout;