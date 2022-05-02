import React,{useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import Styles from "./Shop.module.css";
import Component from "./Component";
import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "../Redux/addedProducts/action";
import { getProducts } from "../../Redux/product/action";
import { isLocalStorage } from "../../Redux/users/action";

function Shop(){
    const dispatch = useDispatch();
    const [address,setAddress] = useState("all");
    const[type,setType] = useState("");
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(700);

    const changeMinPrice = (event) => setMinPrice(event.target.value);
    const changeMaxPrice = (event) => setMaxPrice(event.target.value);

    const {products} = useSelector(state => {
        return state.productsReducer;
    })
    const {user} = useSelector(state => {
        return state.usersReducer;
    })
    // const addProducts = useSelector(state => {
    //     return state.addedProducts.productAdd;
    // })

    useEffect(() => {
        dispatch(getProducts(address))
    },[address])
    
    const categoriesArr = ["all",'Woman','Man','Child'];
    const categoriesOfArr = ["clothing","shoes","accessories"];
    

    // console.log("products",products)


    return(
        <div className={Styles.container}>
            <div className={Styles.BgImg}>
                <div className={Styles.backImg}></div>
                <h2 className={Styles.title}>DRESSES</h2>
            </div>
            <div className={`container ${Styles.content}`}>
                <div className={Styles.item1}>
                    <h6 className={Styles.categories}>categories</h6>
                    <ul className={Styles.categoriesType}>
                        {categoriesArr.map(v => <li key={Math.random()} onClick={() => {
                            setAddress(v)
                            return setType("")
                            }}>{v}</li>)}
                    </ul>
                    <p className={Styles.category}>category</p>
                    <ul className={Styles.categoriesType}>
                       {categoriesOfArr.map(v => <li  key={Math.random()} onClick={() => setType(v)}>{v}</li>)}
                    </ul>
                    <h6 className={Styles.categories} style={{marginTop:"50px"}}>filter by</h6>
                    <p className={Styles.category} style={{margin:"30px 0"}}>price</p>
                    <input type="number" value={minPrice} 
                        style={{
                                width:"60px",
                                height:"25px"
                                }} 
                        onChange={changeMinPrice} />
                    <input type="number" value={maxPrice}
                        style={{
                            width:"60px",
                            height:"25px",
                            marginLeft:"30px"
                        }} 
                        onChange={changeMaxPrice}
                            />
                    <p className={Styles.category} style={{margin:"10px 0"}}>range: $3.00 - $700.00</p>
                    <p className={Styles.category} style={{margin:"30px 0"}}>brands</p>
                    <ul className={Styles.categoriesType} style={{padding:"0"}}>
                        <li>all</li>
                        <li>asos</li>
                        <li>mango</li>
                        <li>river island</li>
                        <li>topshop</li>
                        <li>zara</li>
                    </ul>
                </div>
                <div className={Styles.item2}>
                    <p className={Styles.category}><span style={{color:"blue"}}>186</span> products found</p>
                    <div className={`row`}>   
                        {/* {product.map(v => {
                            if(address === "all"){
                                if(type===""){
                                    return <Component v={v}  addToCard={addToCard} key={Math.random()} />
                                }else if(v.categorieOf.toLowerCase() === type){
                                    return <Component v={v}  addToCard={addToCard} key={Math.random()} />
                                }
                            }else if(v.categorie.toLowerCase() === address){
                                if(type===""){
                                    return <Component v={v} addToCard={addToCard} key={Math.random()} />
                                }else if(v.categorieOf.toLowerCase() === type){
                                    return <Component v={v}  addToCard={addToCard} key={Math.random()} />
                                }
                            }
                            return null;
                        })}    */}
                         {products.map(product => {
                            return <Component product={product} key={product.id} />
                        })}   
                          
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Shop;