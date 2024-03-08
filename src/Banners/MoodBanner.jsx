import React from "react";
import styles from './MoodBanner.module.css';

export default function MoodBanner({ img }) {
    return (
        <div className={styles.moodbanner}>
            <img src={img} alt="" className={styles.bannerimg} />
        </div>
    )
}