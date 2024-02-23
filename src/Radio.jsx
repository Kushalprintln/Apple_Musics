import React from "react";
import styles from './Radio.module.css';
import RadioCard from "./RadioCard";
import RadioCardConatiner from "./RadioCardContainer";
import Heading from "./Heading";
import Carousel from "./Carousel";
export default function Radio(){
    return(
        <div className={styles.radio}>
            <h1>Radio</h1>
            <br />
            <Heading text={"Local Broadcasters"}/>
            <Carousel cardtype={'radio'}/>
        </div>
    )
}