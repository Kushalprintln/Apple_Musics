// IMPORTING REACT AND STYLES
import React from "react";
import styles from './Searchpage.module.css';
import MoodCard from "../Cards/MoodCard";
// IMPORTING IMAGES FOR THE MOOD;
import happy from '../../images/happy.webp';
import romatic from '../../images/romatic.webp';
import excited from '../../images/excited.jpg';
import sad from '../../images/sad.webp';

import Heading from "../assets/Heading";
import { Outlet } from "react-router-dom";

export default function Searchpage(){

    const moods = [
        {mood:"happy",img:happy},
        {mood:"romantic",img:romatic},
        {mood:"excited",img:excited},
        {mood:"sad",img:sad}
    ]
    
    return (
        <div className={styles.searchpage}>
            <Outlet/>
            <br />
            <Heading text={'Search by Mood'}/>
            <div className={styles.cardContainer}>
                {moods.map((ele,idx)=>{
                    return <MoodCard img={ele.img} mood={ele.mood} key={idx}/>
                })}
            </div>
        </div>
    )
}