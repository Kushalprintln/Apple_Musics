import React from "react";
import styles from './Songrow.module.css';
export default function Songrow({data,bg}){
    return (
        <div style={{backgroundColor: bg? '#232323' : null}} className={styles.songrow} >
            <span className={styles.song}>
                <img src={data.thumbnail} alt="" />
                {data.title}
            </span>
            <span className={styles.artist}>Artist Name</span>
            <span className={styles.album}>Album Name</span>
            <span className={styles.time}>Time</span>
        </div>
    )
}