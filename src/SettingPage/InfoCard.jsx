// IMPORTING REACT AND STYLES;
// (USING INFO CARD COMPONENT FOR SHOWING THE DETAILS OF THE LOGEDIN USER IN SETTINGS PAGE);
import React from "react";
import styles from './InfoCard.module.css';
export default function InfoCard({ info, modal }) {
    return (

        info === "password" ?
            <>
                <div className={styles.infocard} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                    <span style={{ fontSize: '17px', fontWeight: '700' }}>Password</span>
                    <span className={styles.editbtn} onClick={() => { modal(true) }}>Update Password</span>
                </div>
            </> :
            <>
                <div className={styles.infocard} style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                    <span style={{ fontSize: '17px', fontWeight: '700', textTransform: 'capitalize' }}>{info[0]}</span>
                    <span style={{ fontSize: '17px', textTransform: 'capitalize' }}>{info[1]}</span>
                </div>
            </>

    )
}