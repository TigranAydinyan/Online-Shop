import React from "react";
import Styles from "./ProductComponent.module.css";

function ProductComponent(props){
    return(
        <div className={Styles.content}>
            <img src={props.img} alt="" className={Styles.img} />
            <div className={Styles.transparent}>
                <p className={Styles.text}>{props.text}</p>
            </div>
        </div>
    )
}

export default ProductComponent;
