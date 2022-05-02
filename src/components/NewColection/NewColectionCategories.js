import React from "react";
import Styles from "./NewColectionCategories.module.css";

function NewColectionCategories(){
    return(
        <div className={`content container ${Styles.component}`}>
            <div className={`${Styles.item1} ${Styles.item}`}>
                <div className={Styles.transparent}>
                    <button className={Styles.btn}>CLOTHING</button>
                </div>
            </div>
            <div className={`${Styles.item2} ${Styles.item}`}>
                <div  className={Styles.transparent}>
                    <button className={Styles.btn}>SHOES</button>
                </div>
            </div>
            <div className={`${Styles.item3} ${Styles.item}`}>
                <div  className={Styles.transparent}>
                    <button className={Styles.btn}>ACCESSORIES</button>
                </div>
            </div>
        </div>
    )
}

export default NewColectionCategories;