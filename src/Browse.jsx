import React, { useEffect, useState } from "react";
import styles from './Browse.module.css';
import Carousel from "./Carousel";
import Loader from "./Loader";
import Heading from "./Heading";
export default function Browse(){

    const[songs,setSongs] = useState([]);
    const[album,setAlbum] = useState();
    const LoadingCss = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    //REQUIRMENTS;
    const songURL = 'https://academics.newtonschool.co/api/v1/music/song?limit=20';
    const albumURL = 'https://academics.newtonschool.co/api/v1/music/album?limit=20';
    const header = {'projectId': 'f104bi07c490'}

    async function getSongs(){
        const resp = await fetch(songURL,{
            headers: header
        })
        console.log(resp);
        const data = await resp.json();
        console.log('songs',data);
        setSongs(data);
    }
    async function getAlbum(){
        const resp = await fetch(albumURL,{
            headers: header
        })
        console.log(resp);
        const data = await resp.json();
        console.log('album',data);
        setAlbum(data.data);
    }
    useEffect(()=>{
        getSongs();
        getAlbum();
    },[])

    return (
        <div className={styles.browse}  style={!album ? LoadingCss : null}>
            {!album ? <Loader/>:
            <>
            <h1>Browser</h1>
            <br />
            <Heading text={"Albums"}/>
            <Carousel cardtype={'song'} data={album}/>
            </>
            }
        </div>
    )
}