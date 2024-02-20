import React from "react";
import styles from './Details.module.css';
export default function Details({image,title,discription}){
    return (
        <div className={styles.details}>
            <img src={image} alt="" />
            <section className={styles.info}>
                <h1 className={styles.albumHeading}>{title}</h1>
                <h1 className={styles.appleHeading}>Apple Music Chill</h1>
                <span className={styles.update}>Update last week</span>
                <p className={styles.albumDis}>{discription}</p>
            </section>
        </div>
    )
}