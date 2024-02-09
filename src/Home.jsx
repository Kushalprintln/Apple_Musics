import React from "react";
import styles from './Home.module.css';
import Banner from "./Banner";
import logo from '../images/logo-removebg-preview.png'
export default function Home(){
    return (
        <div className={styles.home}>
            <img src={logo} alt=""  width={'100px'}/>
            <div className={styles.intro}>
                <h1 className={styles.introhead}>Discover New Music Everyday.</h1>
                <p className={styles.intropera}>Get playlists and albums inspired by the artists and genres you're listening to. 1 month free, then $10.99/month.</p>
            </div>
            <Banner/>
        </div>
    )
}