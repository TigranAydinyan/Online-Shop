import React from "react";
import Styles from "./ProfileInformation.module.css";
import avatar from "../../../assets/images/avatar_2x.png"

function ProfileInformation({user}){

    return(
        <div className={`col-3`}>
            <h1 className={Styles.userName}>{user?.userName} {user?.surname}</h1>
            <div className={Styles.avatarDiv}>
                <img src={avatar} alt="" className={Styles.avatarImg} />
            </div>
            <div className={Styles.emptyDiv}></div>
            <div className={Styles.activity}>
                <div className={Styles.item}>
                    <span style={{
                        color:"grey",
                        fontSize: "14px",
                        }}>Activity <i _ngcontent-tsr-c12="" className="fa fa-dashboard fa-1x"></i>
                    </span>
                </div>
                <div className={Styles.item1}>
                   <p className={Styles.products}>Bougth Products</p>
                   <p className={Styles.productsCount}>125</p>
                </div>
                <div className={Styles.item1}>
                   <p className={Styles.products}>Likes</p>
                   <p className={Styles.productsCount}>13</p>
                </div>
                <div className={Styles.item1}>
                   <p className={Styles.products}>Posts</p>
                   <p className={Styles.productsCount}>37</p>
                </div>
                <div className={Styles.item1} style={{border:"none"}}>
                   <p className={Styles.products}>Followers</p>
                   <p className={Styles.productsCount}>78</p>
                </div>
            </div>
            <div className={Styles.social}>
                <div className={Styles.media}>
                    <span>Social Media</span>
                </div>
                <div style={{padding:"10px 15px"}}>
                    <i className="fa fa-facebook fa-2x"></i> 
                    <i className="fa fa-github fa-2x"></i>
                    <i className="fa fa-twitter fa-2x"></i>
                    <i className="fa fa-pinterest fa-2x"></i>
                    <i className="fa fa-google-plus fa-2x"></i>
                </div>
            </div>
        </div>
    )
}

export default ProfileInformation;