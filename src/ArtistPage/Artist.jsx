// IMPORTING REACT, DEPENDENCIES AND STYLES;
import React, { useEffect, useState } from "react";
import styles from './Artist.module.css';
import { useParams } from "react-router-dom";
// IMPORTING OHTER COMPONENTS;
import Details from "../Details";
import Songs from "../Songs";
import Loader from "../Loader";
import { getArtistData } from "../Logic";

export default function Artist() {

    const artistId = useParams();

    const [artistData, setArtistData] = useState([]);

    async function getData() {
        const data = await getArtistData(artistId.artistId); // Getting artistId from params
        setArtistData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={artistData.length === 0 ? styles.loadingContainer : styles.artist}>
            {artistData.length !== 0 ?
                <>
                    <Details image={artistData.image} title={artistData.name} discription={artistData.description} />
                    <Songs songs={artistData.songs} artist={artistData.name} />
                </> :
                <Loader />
            }
        </div>
    )
}