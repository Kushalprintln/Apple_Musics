import React, { useContext } from "react";
import styles from './Setting.module.css';
import InfoCard from "./infoCard";
import Authcontext from "./AuthContext";
export default function Setting(){

    const Authentication = useContext(Authcontext);
    console.log(Authentication.User[0])

    return (
        <div className={styles.setting}>
            <h1>Account Setting</h1>
            <div className={styles.summary}>
                <h3>Account Summary</h3>
                {Authentication.User[0] &&
                    <div className={styles.userinfo}>
                    <InfoCard info={["Name",Authentication.User[0].name]}/>
                    <InfoCard info={["Apple Id",Authentication.User[0].email]}/>
                    <InfoCard info={"password"}/>
                    </div>}
            </div>
        </div>
    )
}