import React from "react";
import Styles from "./NewColectionAd.module.css";


function NewColectionAd() {
    return(
        <div className={Styles.main}>
            <div className={Styles.NewColectionAd}>
                <div className="content container">
                    <p className={Styles.p}>asoss</p>
                    <h1 className={Styles.title}>NEW COLLECTION</h1> 
                    <button className={Styles.button}>VIEW COLLECTION</button>
                </div>
            </div>
            
            
         
        </div>
    )
}

export default NewColectionAd;