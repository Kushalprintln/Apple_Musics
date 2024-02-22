import React from "react";
import styles from './MoodBanner.module.css';
import image from '../images/excited.jpg';
export default function MoodBanner({img}){
    return (
        <div className={styles.moodbanner}>
            <img src={img} alt="" className={styles.bannerimg}/>
        </div>
    )
}