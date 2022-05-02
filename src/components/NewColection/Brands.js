import React from "react";
import Styles from "./Brands.module.css";
import topShop from "../../assets/images/brandsImage/brand1.png"
import mango from "../../assets/images/brandsImage/brand2.png"
import zara from "../../assets/images/brandsImage/brand3.png"
import bershka from "../../assets/images/brandsImage/brand4.png"
import asos from "../../assets/images/brandsImage/brand5.png"
import river from "../../assets/images/brandsImage/brand6.png"

function Brands(){
    return(
        <div className={`container-fluid`}>
            <div className={`row ${Styles.brands}`}>
                <div className={`col-2`}>
                    <img src={topShop} alt="" className={Styles.img} />
                </div>
                <div className={`col-2`}>
                    <img src={mango} alt="" className={Styles.img} />
                </div>
                <div className={`col-2`}>
                    <img src={zara} alt="" className={Styles.img} />
                </div>
                <div className={`col-2`}>
                    <img src={bershka} alt="" className={Styles.img} />
                </div>
                <div className={`col-2`}>
                    <img src={asos} alt="" className={Styles.img} />
                </div>
                <div className={`col-2`}>
                    <img src={river} alt="" className={Styles.img} />
                </div>
            </div>
        </div>
    )
}

export default Brands;