import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Signup.module.css";
import {signup} from '../../Redux/users/action'
import { useDispatch, useSelector } from "react-redux";

function Signup(){
    const dispatch = useDispatch();

    const [userName,setUserName] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    const getUserName = (event) => setUserName(event.target.value);
    const getSurname = (event) => setSurname(event.target.value);
    const getEmail = (event) => setEmail(event.target.value);
    const getPassword = (event) => setPassword(event.target.value);

    const {user} = useSelector(state => state.usersReducer)

    console.log('user', user)

    const onSignup = () => {

        const data = {
            username: userName,
            surname: surname,
            email: email,
            password: password,
        }

        dispatch(signup(JSON.stringify(data)))
    }

    return(
        <div className="container-fluid" style={{backgroundColor:"#f2f2f2"}}>
            <div className={`container ${Styles.content}`}>
                <div className={Styles.item1}></div>
                <div className={`${Styles.item2} row container`}>
                    <div className={`col-12 mb-3`}>
                        <h5 className={Styles.title}>ACCOUNT LOGIN</h5>
                    </div>
                    <div className={`col-6 p-0 mb-3`}>
                        <input type="text" placeholder="User name" className={`${Styles.input}`} value={userName} 
                            onChange={getUserName}
                        />
                    </div>
                    <div className={`col-6 p-0 mb-3`}>
                        <input type="text" placeholder="Surname" className={`${Styles.input} ${Styles.rightInput}`} value={surname} onChange={getSurname} />
                    </div>
                    <div className={`col-6 p-0`}>
                        <input type="email" placeholder="Email" className={Styles.input} value={email} 
                        onChange={getEmail} />
                    </div>
                    <div className={`col-6 p-0`}>
                        <input type="password" placeholder="Password" className={`${Styles.input} ${Styles.rightInput}`} value={password} onChange={getPassword} />
                    </div>
                    <div className={`col-12 p-0 text-center`}>
                        <button className={Styles.btn} 
                        onClick={() => onSignup()}
                        >REGISTRATION</button>
                    </div>
                    <div className={`col-12 ${Styles.forgotDiv}`}>
                        <span className={Styles.span}>Forgot </span>
                        <a href="#" className={Styles.forgot}>User name / password</a>
                    </div>
                    <div className={`col-12 ${Styles.signup}`}>
                        <Link to="/signin"><a href="" className={Styles.forgot}>SIGN IN</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;