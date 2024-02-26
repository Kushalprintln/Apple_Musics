import React from "react";
import styles from './InfoCard.module.css';
export default function InfoCard({info}){
    return (
        
        info === "password" ? 
        <> 
            <div className={styles.infocard} style={{display:'flex',flexDirection:'column',marginBottom:'10px'}}>
            <span style={{fontSize:'17px',fontWeight:'700'}}>Password</span>
            <span className={styles.editbtn}>Update Password</span>
            </div>
        </> :
        <> 
        <div className={styles.infocard} style={{display:'flex',flexDirection:'column',marginBottom:'10px'}}>
        <span style={{fontSize:'17px',fontWeight:'700'}}>{info[0]}</span>
        <span style={{fontSize:'17px'}}>{info[1]}</span>
        </div>
    </>
        
    )
}