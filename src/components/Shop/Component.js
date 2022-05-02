import { useState } from "react";
import Styles from "./Component.module.css";
import { addCard } from "../../Redux/cards/action";
import { useDispatch, useSelector } from "react-redux";


function Component({product}){
    const dispatch = useDispatch();
    const {isLoggedIn,user} = useSelector(state => state.usersReducer);
    
    const addToCard = (id) => {
        if(!isLoggedIn) return alert("Please logged in!")
        const cardData = {
            name: product.name,
            quantity: product.quantity,
            description: product.description,
            oldPrice: product.oldPrice,
            newPrice: product.newPrice,
            image: product.img,
            color: product.color,
            size: product.size,
            userId: user.id
        }

        dispatch(addCard(JSON.stringify(cardData)))
    }
    return(
        <div className={`col-4 mb-5`} key={Math.random()}>
        <div className={Styles.imgDiv}>
            <img src={product.img} alt="" className={Styles.productImg} />
            {product.sale !== "" ? product.sale !== null ? <div className={Styles.forSale}>
                <span className={Styles.sale}>{product.sale}%</span>
                </div> : null : null}
            <img src={product.hoverImg} alt="" className={Styles.imgHover} />
            <div className={Styles.iconDiv}>
                <i className={`fa fa-heart  ${Styles.heart}`}></i>
            </div>
            <button className={Styles.addBtn} onClick={addToCard.bind(this,product.id)}>ADD TO CARD</button>
        </div>
        <div className={Styles.inform}>
            <span className={Styles.brandName}>{product.name}</span>
            <p className={Styles.description}>{product.description}</p>
            <p className={Styles.new}><span className={Styles.old}>${product.oldPrice}</span> ${product.newPrice}</p>
        </div>
    </div>
    )
}

export default Component;