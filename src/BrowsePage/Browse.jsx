// IMPORTING REACT , DEPENDENCIES AND STYLES
import React, { useEffect, useState } from "react";
import styles from './Browse.module.css';
// IMPORTING OTHER COMPONENTS
import Carousel from "../Carousel";
import Loader from "../Loader";
import Heading from "../Heading";
import { getAlbum, getSongs } from "../Logic";

export default function Browse() {

    const [songs, setSongs] = useState();
    const [album, setAlbum] = useState();

    async function getData() {
        const songsData = await getSongs();
        setSongs(songsData);
        const albumData = await getAlbum();
        setAlbum(albumData);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={songs && album ? styles.browse : styles.loadingContainer}>
            {songs && album ?
                <>
                    <h1>Browser</h1>
                    <br />
                    <Heading text={"Songs"} />
                    <Carousel cardtype={'song'} data={songs} />
                    <br />
                    <Heading text={"Albums"} />
                    <Carousel cardtype={'album'} data={album} />
                    <br />
                </> :
                <Loader />
            }
        </div>
    )
}