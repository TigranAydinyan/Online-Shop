import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../Redux/users/action";

function Auth(){
    const dispatch = useDispatch();

    useEffect(() => {
        const email = localStorage.getItem("email");
        if(email){
            dispatch(getUser(email))
        }
    },[])
    
    return null;
}

export default Auth;