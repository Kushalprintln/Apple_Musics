import React, { useEffect, useState } from "react";
import styles from './Mood.module.css';
import MoodBanner from "./MoodBanner";

// IMAGE 
import happy from '../images/happy.webp';
import romantic from '../images/romatic.webp';
import excited from '../images/excited.jpg';
import sad from '../images/sad.webp';
import { useParams } from "react-router-dom";
import Songs from "./Songs";
import Heading from "./Heading";

export default function Mood(){
    const params = useParams();
    console.log(params);
    const[moodImg,setMoodImg] = useState();

    const[MoodSong,setMoodSong] = useState([]);
    const moodsongsURL = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${params.mood}"}`;
    const header = {'projectId': 'f104bi07c490'};

    async function moodSongData(){
        const resp = await fetch(moodsongsURL ,{
            headers: header
        })
        // console.log(resp);
        const data = await resp.json();
        console.log(data);
        console.log('MoodSongs',data.data);
        setMoodSong(data.data);
    }

    function setbanner(){
        if(params.mood === 'happy'){
            setMoodImg(happy);            
        }else if(params.mood === 'romantic'){
            setMoodImg(romantic);
        }else if(params.mood === 'excited'){
            setMoodImg(excited);
        }else{
            setMoodImg(sad);
        }
    }

    useEffect(()=>{
        setbanner();
        moodSongData();
    },[params])

    return (
        <div className={styles.mood}>
            <MoodBanner img={moodImg}/>
            <Heading text={`${params.mood} songs`}/>
            <Songs songs={MoodSong}/>
        </div>
    )
}