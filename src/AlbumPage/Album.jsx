// IMPORTING REACT COMPONENT
import React, { useEffect, useState } from "react";
import styles from './Album.module.css';
import { useParams } from "react-router-dom";
// IMPORTING OTHER COMPONENT;
import Details from "../Details";
import Carousel from "../Carousel";
import Heading from "../Heading";
import Songs from "../Songs";
import Loader from "../Loader";
import { getAlbumData } from "../Logic";

export default function Album() {

    const albumId = useParams();

    const [albumData, setAlbumData] = useState([]);

    async function getData() {
        const data = await getAlbumData(albumId.albumId); // Getting albumId from params
        setAlbumData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className={albumData.length === 0 ? styles.loadingContainer : styles.album}>
                {albumData.length !== 0 ?
                    <>
                        <Details image={albumData.image} title={albumData.title} discription={albumData.description} />
                        <Songs songs={albumData.songs} album={albumData.title} />
                    </> :
                    <Loader />
                }
            </div>
            <div className={styles.artistSection}>
                <Heading text={"Featured Artists"} />
                <Carousel cardtype={'artist'} data={albumData.artists} />
            </div>
        </>
    )
}