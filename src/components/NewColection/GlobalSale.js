import React from "react";
import Styles from "./GlobalSale.module.css";

function GlobalSale(){
    return(
        <div className={`content container ${Styles.component}`}>
            <div className={Styles.titles}>
                <p className={Styles.sale}>-60%</p>
                <h2 className={Styles.global}>Global Sale</h2>
                <button className={Styles.btn}>BUY NOW</button>
            </div>
        </div>
    )
}
export default GlobalSale;