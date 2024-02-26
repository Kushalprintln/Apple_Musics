import { dialogClasses } from "@mui/material";
import React from "react";
import styles from './SubscribePage.module.css';
import logo from '../images/logo-removebg-preview.png'
import SubscribeCard from "./SubscribeCard";
export default function SubscribePage(){
    const plans = [
        {heading:"voice plan",price:"$4.99 / month",benifits:["1 person","siri on apple devices","songs, playlists, stations","all apple devices"]},
        {heading:"individual plan",price:"$9.99 / month",benifits:["1 person","siri on apple devices","songs, playlists, stations, lyrics, music videos","spatial and lossless audio","apple + supported devices"]},
        {heading:"family plan",price:"$14.99 / month",benifits:["upto 6 people","siri on apple devices","songs, playlists, stations, lyrics, music videos","spatial and lossless audio","apple + supported devices"]},
    ]
    return (
        <div className={styles.subscribepage}>
            <img src={logo} alt=""  width={'150px'}/>
            <div className={styles.subscribecontainer}>
                {plans.map((ele,idx)=>{
                    return <SubscribeCard data={ele} key={idx}/>
                })}
            </div>
        </div>
    )
}