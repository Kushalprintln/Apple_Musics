import React from "react";
import styles from './EmptySongrow.module.css';
import nosong from '../../images/noSongs.png'
export default function EmptySongrow(){
    return (
        <div className={styles.emptysongrow}>
            <img src={nosong} alt="" className={styles.nosongs}/>
            <p>No songs in this playlist.</p>
        </div>
    )
}