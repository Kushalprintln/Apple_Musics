import React from "react";
import styles from './Musicplayer.module.css';
import Controls from "./Controls";
export default function Musicplayer(){
    return(
        <div className={styles.musicplayer}>
            <div className={styles.controlscontainer}>
                <Controls/>
            </div>
        </div>
    )
}