import React, { useState } from "react";
import Styles from "./ChangeProfile.module.css";
import { useNavigate } from "react-router";
import logo from "../../../assets/images/profileLogo.jpg";
import { useDispatch } from "react-redux";
import { changeUserData, deleteUserData, exitUser } from "../../../Redux/users/action";
import { exitCards } from "../../../Redux/cards/action";

function ChangeProfile({user}){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const onChangeName = (event) => setName(event.target.value);
    const onChangeSurname = (event) => setSurname(event.target.value);
    const onChangeEmail = (event) => setEmail(event.target.value);
    const onChangePassword = (event) => setPassword(event.target.value);

    const refreshInputFiled = () => {
        setName("");
        setSurname("");
        setEmail("");
        setPassword("");
    }

    const SaveUserUpdates = () => {
        const userUpdates = {
            userName: name,
            surname: surname,
            email: email,
            password:password,
            id: user.id
        }
            dispatch(changeUserData(userUpdates,user.id))
    }

    const onDeleteUser = () => {
        dispatch(deleteUserData(user.id));
        navigate('/signin')
    }

    const exit = () => {
        dispatch(exitUser());
        dispatch(exitCards())
        localStorage.removeItem("email");  
        navigate('/')
    }
    return(
        <div className={`col-9 ${Styles.changeProfile}`}>
            <div className={Styles.logoDiv}>
                <img src={logo} alt="" className={Styles.logoImg} />
            </div>
            <div className={Styles.header}>
                <div className={Styles.home}>
                    <span className={Styles.homeText}>home</span>
                </div>
                <div>
                    <button className={Styles.btn} onClick={exit}>Exit</button>
                </div>
            </div>
            <div className={Styles.main}>
                <div className={`${Styles.formDiv} row`}>
                    {/* <form> */}
                        <div className={`col-6 ${Styles.dataChange}`}>
                            <label htmlFor="userName" className={Styles.label}>userName</label>
                            <input type="text" placeholder="User Name" id="userName" className={Styles.input} value={name} onChange={onChangeName} />
                        </div>
                        <div className={`col-6 ${Styles.dataChange}`}>
                            <label htmlFor="surname" className={Styles.label}>Surname</label>
                            <input type="text" placeholder="Enter Surname" id="surname" className={Styles.input} value={surname} onChange={onChangeSurname} />
                        </div>
                        <div className={`col-6 ${Styles.dataChange}`} style={{marginTop:"10px"}} >
                            <label htmlFor="email" className={Styles.label}>Email</label>
                            <input type="email" placeholder="you@email.com" id="email" className={Styles.input} value={email} onChange={onChangeEmail} />
                        </div>
                        <div className={`col-6 ${Styles.dataChange}`} style={{marginTop:"10px"}}>
                            <label htmlFor="password" className={Styles.label}>Password</label>
                            <input type="password" placeholder="password" id="password" className={Styles.input} value={password} onChange={onChangePassword} />
                        </div>
                        <div className={`col-12 ${Styles.profileChangeField}`}>
                            <div>
                                <button className='btn btn-success' 
                                onClick={SaveUserUpdates}
                                ><i className="fa fa-check-circle"></i> Save</button>
                                <button type="button" className="btn btn-light" style={{
                                        backgroundColor: '#bdb9b9'
                                }} onClick={refreshInputFiled}><i className="fa fa-refresh"></i> Reset</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-danger" onClick={onDeleteUser}>x Delete</button>
                            </div>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}

export default ChangeProfile;