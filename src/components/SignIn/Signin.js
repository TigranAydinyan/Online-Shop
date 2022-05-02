import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Styles from "./Signin.module.css";
import { signin } from "../../Redux/users/action";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../Redux/cards/action";

function Signin(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector(state => state.usersReducer);
    const onSignin = () => {
        dispatch(signin(email,password)).then(() => {
            navigate('/')
        }).catch(err => {
            alert(err.message)
        })
    }
    

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    return(
        <div className="container-fluid" style={{backgroundColor:"#f2f2f2"}}>
            <div className={`container ${Styles.content}`}>
                <div className={Styles.item1}></div>
                <div className={`${Styles.item2} row container`}>
                    <div className={`col-12 mb-3`}>
                        <h5 className={Styles.title}>ACCOUNT LOGIN</h5>
                    </div>
                    <div className={`col-6 p-0`}>
                        <input type="email" placeholder="Email" className={Styles.input} value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className={`col-6 p-0`}>
                        <input type="password" placeholder="Password" className={`${Styles.input} ${Styles.rightInput}`} value={password} onChange={onChangePassword} />
                    </div>
                    <div className={`col-12 p-0`}>
                        <button className={Styles.btn} onClick={onSignin} >LOGIN</button>
                    </div>
                    <div className={`col-12 ${Styles.forgotDiv}`}>
                        <span className={Styles.span}>Forgot </span>
                        <a href="#" className={Styles.forgot}>User name / password</a>
                    </div>
                    <div className={`col-12 ${Styles.signup}`}>
                        <Link to='/signup' className={Styles.forgot}>SIGN UP</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;