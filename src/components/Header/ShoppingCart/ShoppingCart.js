import React, { useEffect } from "react";
import Styles from "./ShoppingCart.module.css";
import bag from "../../../assets/images/bag.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../Redux/addedProducts/action";
import { deleteCardProduct, getCards } from "../../../Redux/cards/action";

function ShoppingCart(props){
    const dispatch = useDispatch()
    const {cards} = useSelector(state => state.cardsReducer)
    const {user} = useSelector(state => state.usersReducer)
    const delProduct = (id) => {
        dispatch(deleteCardProduct(id))
    }
    useEffect(() => {
        if(user){
         dispatch(getCards(user.id))
        }
    },[user])

    console.log(cards)
    return(
        <div className={Styles.container} 
        style={{
            visibility:props.trash ? "visible":"hidden"
        }}>
            <div className={`${Styles.bag} d-flex align-items-center justify-content-center`} onClick={() => props.setTrash(!props.trash)}>
                <img src={bag} style={{width:"20px"}} alt="" /> 
            </div>
            <div className={Styles.checkOut}>
                <h3 className={Styles.summery}>summery</h3>
                <div className="row">
                    {cards.map(card => <div className={`col-1 ${Styles.product}`} key={card.id} >
                        <img src={card.image} className={Styles.img} />
                        <span className={Styles.deleteProduct} onClick={() => delProduct(card.id)} >x</span>
                        <h6  className={Styles.text}>{card.name}</h6>
                        <p  className={Styles.text}>${card.newPrice}</p>
                    </div>)}
                </div>
                <div className={`d-flex ${Styles.component}`}>
                    <div className={Styles.delivery}>
                        <p className={Styles.text}>DELIVERY:</p>
                        <p className={Styles.text}>TOTAL:</p>
                    </div>
                    <div>
                        <p className={Styles.text}>FREE</p>
                        <p className={Styles.text} style={{textAlign:"end"}}>${cards.reduce((sum,v) => sum += +v.newPrice,0)}</p>
                    </div>
                </div>
                <div style={{marginTop:"100px"}}>
                    <button className={Styles.btn}><Link to="/checkout" style={{
                        color:"black",
                        textDecoration:"none"
                }}>check out</Link></button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;