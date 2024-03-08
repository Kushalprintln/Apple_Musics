// IMPORTING REACT AND STYELS;
import React, { useEffect, useState } from "react";
import styles from './Mood.module.css';
// IMAGE 
import happy from '../../images/happy.webp';
import romantic from '../../images/romatic.webp';
import excited from '../../images/excited.jpg';
import sad from '../../images/sad.webp';
import { useParams } from "react-router-dom";
// Importing other components;
import MoodBanner from "../Banners/MoodBanner";
import Songs from "../SongTable/Songs";
import Heading from "../assets/Heading";

export default function Mood() {
    const params = useParams();
    const [moodImg, setMoodImg] = useState();

    const [MoodSong, setMoodSong] = useState([]);

    async function moodSongData() {
        const moodsongsURL = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${params.mood}"}`;
        const header = { 'projectId': 'f104bi07c490' };
        const resp = await fetch(moodsongsURL, {
            headers: header
        })
        // console.log(resp);
        const data = await resp.json();
        // console.log('MoodSongs',data.data);
        setMoodSong(data.data);
    }

    function setbanner() {
        if (params.mood === 'happy') {
            setMoodImg(happy);
        } else if (params.mood === 'romantic') {
            setMoodImg(romantic);
        } else if (params.mood === 'excited') {
            setMoodImg(excited);
        } else {
            setMoodImg(sad);
        }
    }

    useEffect(() => {
        setbanner();
        moodSongData();
    }, [params])

    return (
        <div className={styles.mood}>
            <MoodBanner img={moodImg} />
            <Heading text={`${params.mood} songs`} />
            <Songs songs={MoodSong} />
        </div>
    )
}