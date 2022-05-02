import React, {useState} from "react";
import heart from "../../assets/images/heart.svg";
import userPhoto from "../../assets/images/user.svg";
import bag from "../../assets/images/bag.svg";
import logo from "../../assets/images/logo.png"
import Styles from './Header.module.css';
import {Link} from "react-router-dom";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";

function Header() {
    const [trash,setTrash] = useState(false);
    const [isScrolling,setIsScrolling] = useState(false);
    const {isLoggedIn} = useSelector(state => state.usersReducer)
   
    const oldScroll = 0;
    window.onscroll = () => {
      const scrollTopPosition = document.documentElement.scrollTop;
      scrollTopPosition !== oldScroll ? setIsScrolling(true) : setIsScrolling(false);
    }
   
    return (
      <div className={isScrolling ? Styles.HeaderScrolling : Styles.Header}>
        <div className='container-fluid d-flex p-0' style={{
          borderBottom : "1px solid rgb(235, 229, 229)",
        }}>
            <div className={`${Styles.navDiv} d-flex p-2`}>
              <Link to="/"><img src={logo} alt="" className={`m-0 mx-5`} style={{cursor:'pointer'}} /></Link>
              <ul className={Styles.navigation}>
                <li> <Link to="/"  style={{textDecoration:"none",color:"grey"}}>Home</Link></li>
                <li className={Styles.pagesLi}>Pages<i className={`fa fa-angle-right ${Styles.arrow}`}></i>
                  <ul className={Styles.pagesDetails}>
                    <li><Link to="/" style={{textDecoration:"none",color:"grey"}}>Home</Link></li>
                    <li><Link to="/shop" style={{textDecoration:"none",color:"grey"}}>Shop</Link></li>
                    <li><Link to="/productdetails" style={{textDecoration:"none",color:"grey"}}>Product Details</Link></li>
                    <li><Link to="/checkout" style={{textDecoration:"none",color:"grey"}}>Checkout</Link></li>
                    <li><Link to="/blog" style={{textDecoration:"none",color:"grey"}}>Blog</Link></li>
                    <li><Link to="/singleblog" style={{textDecoration:"none",color:"grey"}}>Single Blog</Link></li>
                    <li><Link to="/regularpage" style={{textDecoration:"none",color:"grey"}}>Regular page</Link></li>
                    <li><Link to="/contact" style={{textDecoration:"none",color:"grey"}}>Contact</Link></li>
                  </ul>
                </li>
                <li><Link to="/blog" style={{textDecoration:"none",color:"grey"}}>Blog</Link></li>
                <li><Link to="/contact" style={{textDecoration:"none",color:"grey"}}>Contact</Link></li>
              </ul>
            </div>
            <div className={`${Styles.headIconsDiv} d-flex`}>
              <div className={`${Styles.searchDiv} d-flex align-items-center`}>
                <i className="fa fa-search" style={{
                  color : 'grey',
                }}></i>
                <input type="text" placeholder="Type for search" className={Styles.searchInput}/>
              </div>
              <div className={`${Styles.heart} d-flex align-items-center justify-content-center`} style={{borderRight: "1px solid rgb(235, 229, 229)",borderLeft: "1px solid rgb(235, 229, 229)"}}>
              <img src={heart} style={{width:"20px"}} alt="" />
              </div>
              <div className={`${Styles.heart} d-flex align-items-center justify-content-center`} style={{borderRight: "1px solid rgb(235, 229, 229)"}}>
                <Link to={isLoggedIn ? '/profile' : '/signin'}><img src={userPhoto}  style={{width:"20px"}} alt="" /></Link>
              </div>
              <div className={`${Styles.heart} d-flex align-items-center justify-content-center`} onClick={() => setTrash(!trash)}>
                <img src={bag} style={{width:"20px"}} alt="" /> 
              </div>
            </div>
        </div>
        <ShoppingCart trash={trash} setTrash={setTrash} />
      </div>
    );
  }
  
  export default Header;