import React from "react";
import styles from './SubscribeCard.module.css';
import applemusicicon from '../images/icon_music__eo8ni6s21cqe_large.png'
export default function SubscribeCard({data}){
    return (
        <div className={styles.subscribecard}>
            <div className={styles.subheading}>
                <img src={applemusicicon} alt="" />
                <section>
                    <h1>{data.heading}</h1>
                    <p>{data.price}</p>
                </section>
            </div>
            <section className={styles.cancle}>
            No commitment. Cancel anytime in Settings at least a day before each renewal date. Plan automatically renews until canceled.
            </section>
            <ul className={styles.benifits}>
                {data.benifits.map((ele,idx)=>{
                    return <li key={idx}>{ele}</li>
                })}
            </ul>
        </div>
    )
}