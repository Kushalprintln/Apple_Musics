// IMPORTING REACT AND STYLES;
// This are album cards
import React from "react";
import styles from './Card.module.css'
import { Link } from "react-router-dom";
export default function Card({ data }) {
    return (
        <Link to={`/album/${data._id}`} style={{ textDecoration: 'none' }}>
            <div className={styles.card}>
                <img src={data.image} alt="" />
                <div className={styles.details}>
                    <p className={styles.title}>{data.title}</p>
                    <p className={styles.discription}>{data.description}</p>
                </div>
            </div>
        </Link>
    )
}