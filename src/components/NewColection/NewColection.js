import React from "react";
import NewColectionCategories from "./NewColectionCategories";
import GlobalSale from "./GlobalSale";
import Product from "./Product";
import Brands from "./Brands";
import NewColectionAd from "./NewColectionAd";
import Footer from "../Footer/Footer";
 
function NewColection(){
    return(
        <div>
            <NewColectionAd />
            <NewColectionCategories />
            <GlobalSale />
            <Product />
            <Brands />
            <Footer />
        </div>
    )
}

export default NewColection;