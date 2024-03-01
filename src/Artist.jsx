import React, { useEffect, useState } from "react";
import styles from './Artist.module.css';
import { useParams } from "react-router-dom";
import Details from "./Details";
import Songs from "./Songs";
import Loader from "./Loader";
export default function Artist() {
    const artistId = useParams();
    console.log(artistId);

    const [artistData, setArtistData] = useState([]);
    const artistDetails = `https://academics.newtonschool.co/api/v1/music/artist/${artistId.artistId}`;
    const header = { 'projectId': 'f104bi07c490' };

    const LoadingCss = {
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    async function getArtistData() {
        const resp = await fetch(artistDetails, {
            headers: header
        })
        // console.log(resp);
        const data = await resp.json();
        console.log(data);
        console.log('ArtistDetails', data.data);
        setArtistData(data.data);
    }

    useEffect(() => {
        getArtistData();
    }, [])

    return (
        <div className={styles.artist} style={artistData.length === 0 ? LoadingCss : null}>
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