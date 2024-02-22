import React, { useEffect, useState } from "react";
import styles from './Artist.module.css';
import { useParams } from "react-router-dom";
import Details from "./Details";
import Songs from "./Songs";
export default function Artist(){
    const artistId = useParams();
    console.log(artistId);

    const[artistData,setArtistData] = useState([]);
    const artistDetails = `https://academics.newtonschool.co/api/v1/music/artist/${artistId.artistId}`;
    const header = {'projectId': 'f104bi07c490'};

    async function getArtistData(){
        const resp = await fetch(artistDetails,{
            headers: header
        })
        // console.log(resp);
        const data = await resp.json();
        console.log(data);
        console.log('ArtistDetails',data.data);
        setArtistData(data.data);
    }

    useEffect(()=>{
        getArtistData();
    },[])

    return (
        <div className={styles.artist}>
            <Details image={artistData.image} title={artistData.name} discription={artistData.description}/>
            <Songs songs={artistData.songs}/>
        </div>
    )
}