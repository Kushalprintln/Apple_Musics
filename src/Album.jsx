import React, { useEffect, useState } from "react";
import styles from './Album.module.css';
import { useParams } from "react-router-dom";
import Details from "./Details";
import Carousel from "./Carousel";
import Heading from "./Heading";
import Songs from "./Songs";
export default function Album(){
    const albumId = useParams();
    // console.log(albumId);
    const [albumData,setAlbumData] = useState([]);
    const albumDetails = `https://academics.newtonschool.co/api/v1/music/album/${albumId.albumId}`;
    const header = {'projectId': 'f104bi07c490'}

    async function getAlbumData(){
        const resp = await fetch(albumDetails,{
            headers: header
        })
        // console.log(resp);
        const data = await resp.json();
        console.log('albumDetails',data.data);
        setAlbumData(data.data);
    }

    useEffect(()=>{
        getAlbumData();
    },[])

    return (
        <>
            <div className={styles.album}>
                <Details image={albumData.image} title={albumData.title} discription={albumData.description}/>
                <Songs songs={albumData.songs}/>
            </div>
            <div className={styles.artistSection}>
                <Heading text={"Featured Artists"}/>
                <Carousel cardtype={'artist'} data={albumData.artists}/>
            </div>
        </>
    )
}