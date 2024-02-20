import React from "react";
import styles from './ArtistCard.module.css';
export default function ArtistCard({data}){
    return (
        <div className={styles.artist}>
            <img src={data.image} className={styles.artistimg} alt=""/>
            <h3>{data.name}</h3>
        </div>
    )
}