import React from "react";
import Styles from "./Product.module.css";
import product1 from "../../assets/images/productImage/product-1.jpg";
import product2 from "../../assets/images/productImage/product-2.jpg";
import product3 from "../../assets/images/productImage/product-3.jpg";
import product4 from "../../assets/images/productImage/product-4.jpg";
import heart from "../../assets/images/heart.svg";

function Product(){

    return(
        <div className={`content container ${Styles.component}`}>
            <h2 className={Styles.title}>Popular Products</h2>
            <div className={Styles.section}>
                <div className={Styles.item}>
                    <img src={product1} alt="" className={Styles.img} />
                    <img src={product2} alt="" className={Styles.imgHover} />
                    <div className={Styles.iconDiv}>
                        <i className={`fa fa-heart  ${Styles.heart}`}></i>
                    </div>
                    <p className={Styles.topShop}>TOPSHOP</p>
                    <h6 className={Styles.dresName}>Knot Front Mini Dress</h6>
                    <p className={Styles.price}>$80.00</p>
                </div>
                <div className={Styles.item}>
                    <img src={product2} alt="" className={Styles.img} />
                    <img src={product3} alt="" className={Styles.imgHover} />
                    <div className={Styles.iconDiv}>
                        <i className={`fa fa-heart  ${Styles.heart}`}></i>
                    </div>
                    <p className={Styles.topShop}>TOPSHOP</p>
                    <h6 className={Styles.dresName}>Poplin Displaced Wrap Dress</h6>
                    <p className={Styles.price}>$80.00</p>
                </div>
                <div className={Styles.item}>
                    <img src={product4} alt="" className={Styles.img} />
                    <img src={product3} alt="" className={Styles.imgHover} />
                    <p className={Styles.p}>-30%</p>
                    <div className={Styles.iconDiv}>
                        <i className={`fa fa-heart  ${Styles.heart}`}></i>
                    </div>
                    <p className={Styles.topShop}>MANGO</p>
                    <h6 className={Styles.dresName}>PETITE Crepe Wrap Mini Dress</h6>
                    <p className={Styles.price}><span className={Styles.span}>$75.00</span> $55.00</p>
                </div>
            </div>
        </div>
    )
}

export default Product;