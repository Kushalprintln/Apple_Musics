import React from "react";
import styles from './ArtistCard.module.css';
import { Link } from "react-router-dom";
export default function ArtistCard({data}){
    return (
        <Link to={`/artist/${data._id}`} style={{textDecoration:'none'}}>
            <div className={styles.artist}>
                <img src={data.image} className={styles.artistimg} alt=""/>
                <h3>{data.name}</h3>
            </div>
        </Link>
    )
}