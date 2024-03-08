// IMPORTING REACT AND STYLE
// THIS IS THE OUTLET COMPONENT OF SEARCH PAGE
import React, { useEffect, useState } from "react";
import styles from './SearchSong.module.css';
import { useParams } from "react-router-dom";
// IMPORTING OTHER CARD COMPONENT
import SongCard from "../Cards/SongCard";
import Heading from "../assets/Heading";
export default function SearchSong(){
    const params = useParams();

    const [search,setsearch] = useState([]);

    const SearchSongURL = `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${params.searchsong}"}`;
    const header = {'projectId': 'f104bi07c490'};

    async function SearchSong(){
        const resp = await fetch(SearchSongURL ,{
            headers: header
        })
        // console.log(resp);
        const data = await resp.json();
        if(resp.ok){
            setsearch(data.data);
        }
    }

    useEffect(()=>{
        SearchSong();
    },[params])

    return (
        <>
        <Heading text={`Showing Results for ${params.searchsong}`}/>
        <div className={styles.searchsong}>
            {search.length===0?
            <h2>No result Found</h2> : 
            search.map((ele,idx)=>{
                return <SongCard data={ele} key={idx}/>
            })}
        </div>
        </>
    )
}