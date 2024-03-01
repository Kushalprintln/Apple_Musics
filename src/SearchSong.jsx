import React, { useEffect, useState } from "react";
import styles from './SearchSong.module.css';
import { useParams } from "react-router-dom";
import SongCard from "./SongCard";
import Heading from "./Heading";
export default function SearchSong(){
    const params = useParams();
    console.log(params);

    const [search,setsearch] = useState([]);

    const SearchSongURL = `https://academics.newtonschool.co/api/v1/music/song?search={"title":"${params.searchsong}"}`;
    const header = {'projectId': 'f104bi07c490'};

    async function SearchSong(){
        const resp = await fetch(SearchSongURL ,{
            headers: header
        })
        // console.log(resp);
        const data = await resp.json();
        console.log(data);
        console.log('SearchSong',data);
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