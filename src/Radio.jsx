import React from "react";
import styles from './Radio.module.css';
import Heading from "./Heading";
import Carousel from "./Carousel";

import R1 from '../images/R1.webp'
import R2 from '../images/R2.webp'
import R3 from '../images/R3.webp'
import R4 from '../images/R4.webp'
import R5 from '../images/R5.webp'
import R6 from '../images/R6.webp'
import R7 from '../images/R7.webp'
import R8 from '../images/R8.webp'
import R9 from '../images/R9.webp'
import R10 from '../images/R10.webp'
// -------------------------------------
import R11 from '../images/R11.webp'
import R12 from '../images/R12.webp'
import R13 from '../images/R13.webp'
import R14 from '../images/R14.webp'
import R15 from '../images/R15.webp'
import R16 from '../images/R16.webp'
import R17 from '../images/R17.webp'
import R18 from '../images/R18.webp'

const local = [
    [{img:R1,radio:"NPR News And Culture",dis:"Stories that inform, inspire, and entertain."},
     {img:R2,radio:"102.7 KIIS-FM Los Angeles",dis:"iHeartRadio"}],
    [{img:R3,radio:"Hot 97",dis:"TuneIn"},
     {img:R4,radio:"KDFC",dis:"TuneIn"}],
    [{img:R5,radio:"93.5 KDAY",dis:"TuneIn"},
     {img:R6,radio:"dublab",dis:"TuneIn"}],
    [{img:R7,radio:"106.7 Lite FM",dis:"iHeartRadio"},
     {img:R8,radio:"KFI AM 640",dis:"iHeartRadio"}],
    [{img:R9,radio:"106.1 KMEL",dis:"iHeartRadio"},
     {img:R10,radio:"iHeartRadio",dis:"TuneIn"}]
]
const International = [
    [{img:R11,radio:"BBC Radio 1",dis:"TuneIn"},
     {img:R12,radio:"Smooth FM 95.3",dis:"iHeartRadio"}],
    [{img:R13,radio:"ONE FM 91.3",dis:"TuneIn"},
     {img:R14,radio:"BBC Radio 2",dis:"TuneIn"}],
    [{img:R15,radio:"Radio Capital",dis:"TuneIn"},
     {img:R16,radio:"Radio Comercial",dis:"TuneIn"}],
    [{img:R17,radio:"BBC Radio 4",dis:"iHeartRadio"},
     {img:R18,radio:"BBC Afrique",dis:"iHeartRadio"}]
]
export default function Radio(){
    return(
        <div className={styles.radio}>
            <h1>Radio</h1>
            <br />
            <Heading text={"Local Broadcasters"}/>
            <Carousel cardtype={'radio'} data={local}/>
            <br />
            <Heading text={"International Broadcasters"}/>
            <Carousel cardtype={'radio'} data={International}/>
        </div>
    )
}