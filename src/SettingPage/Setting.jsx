// IMPORTING REACT, DEPENDENSIES AND STYLE;
import React, { useContext, useEffect, useState } from "react";
import styles from './Setting.module.css';
// IMPORTING INFOCARD AND PASSWORD CHANGE MODAL COMPONENT;
import InfoCard from "./InfoCard";
import PasswordChange from "../Modals/PasswordChange";
// AUTHENTICATION;
import Authcontext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Setting(){

    const Authentication = useContext(Authcontext);
    const navigate = useNavigate();
    const[passModal,setPassModal] = useState(false);

    function NavigateBack(){
        if(!Authentication.User[0]){
            navigate('/');
        }
    }

    useEffect(()=>{
        NavigateBack();
    },[Authentication.User[0]])

    return (
        <>
        {passModal && <PasswordChange close={setPassModal}/>}
        <div className={styles.setting}>
            <h1>Account Setting</h1>
            <div className={styles.summary}>
                <h3>Account Summary</h3>
                {Authentication.User[0] &&
                    <div className={styles.userinfo}>
                    <InfoCard info={["Name",Authentication.User[0].name]}/>
                    <InfoCard info={["Apple Id",Authentication.User[0].email]}/>
                    <InfoCard info={"password"} modal={setPassModal}/>
                    </div>}
            </div>
        </div>
        </>
    )
}