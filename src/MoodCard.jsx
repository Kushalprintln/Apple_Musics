import React from "react";
import styles from './MoodCard.module.css';
import { Link } from "react-router-dom";

export default function MoodCard({img,mood}){
    return (
        <Link to={`/mood/${mood}`} style={{textDecoration:'none',color:'inherit'}}>
            <div className={styles.moodcard}>
                <img src={img} alt={`${mood}`} className={styles.moodimg}/>
                <h3 className={styles.mood}>{mood}</h3>
            </div>
        </Link>
    )
}