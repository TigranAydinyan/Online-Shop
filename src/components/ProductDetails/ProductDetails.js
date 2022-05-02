import React from "react";
import Footer from "../Footer/Footer";
import Styles from "./ProductDetails.module.css";

function ProductDetails(){
    return(
        <div className={Styles.container}>
            <div className={Styles.content}>
                <div className={Styles.item}>
                    <p className={Styles.productPrice}>$</p>
                    <p className={Styles.productDesc}>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.</p>
                    <div className={Styles.selectBox}>
                        <select>
                            <option>Size: XL</option>
                            <option>Size: X</option>
                            <option>Size: M</option>
                            <option>Size: S</option>
                        </select>
                        <select style={{marginLeft:"50px"}}>
                            <option>Color: Black</option>
                            <option>Color: White</option>
                            <option>Color: Red</option>
                            <option>Color: Purple</option>
                        </select>
                    </div>
                    <div className={Styles.checkDiv}>
                        <button className={Styles.btn}>add to card</button>
                        <i className={`fa fa-heart ${Styles.iconHeart}`}></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductDetails;