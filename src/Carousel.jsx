import React, { useRef } from "react";
import Card from "./Card";
import styles from './Carousel.module.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArtistCard from "./ArtistCard";
import RadioCardConatiner from "./RadioCardContainer";
import RadioCard from "./RadioCard";
import SongCard from "./SongCard";
export default function Carousel({cardtype,data}){
    const left = useRef();
    const right = useRef();
    const slidcontainer = useRef();

    // SCROLLING LEFT AND RIGHT;
    function scrollL() {
        slidcontainer.current.scrollLeft -= 1220;
    }
    function scrollR() {
        slidcontainer.current.scrollLeft += 1220;
    }

    function returnCards(){
        if(cardtype === 'album'){
            return (data && data.map((ele,idx)=>{
                return <Card data={ele} key={idx}/>
            }));
        }else if(cardtype === 'artist'){
            return (data && data.map((ele,idx)=>{
                return <ArtistCard data={ele} key={idx}/>
            }))
        }
        else if(cardtype === 'song'){
            return( data && data.map((ele,idx)=>{
                return <SongCard data={ele} key={idx}/>
            }))
        }
        else if(cardtype === 'radio'){
            return( data && data.map((ele,idx)=>{
                return <RadioCardConatiner key={idx}>
                            <RadioCard data={ele[0]}/>
                            <RadioCard data={ele[1]}/>
                       </RadioCardConatiner>
            }))
        }
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.leftbtn} ref={left} onClick={scrollL}>
                <ArrowBackIosIcon/>
            </div>
            <div className={styles.carousalContainer} ref={slidcontainer}>
                <div className={styles.innercontainer}>
                    {returnCards()}
                </div>
            </div>
            <div className={styles.rightbtn} ref={right} onClick={scrollR}>
                <ArrowForwardIosIcon/>
            </div>
        </div>
    )
}