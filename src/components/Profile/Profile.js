import React from "react";
import { useSelector } from "react-redux";
import ChangeProfile from "./ChangeProfile/ChangeProfile";
import Styles from "./Profile.module.css";
import ProfileInformation from "./ProfileInformation/ProfileInformation";

function Profile(){
    const {user} = useSelector(state => state.usersReducer);
    return(
        <div className={`row ${Styles.profile}`}>
            <ProfileInformation user={user}/>
            <ChangeProfile user={user} />
            
        </div>
    )
}

export default Profile;