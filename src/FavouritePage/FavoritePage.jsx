// IMPORTING REACT DEPENDENCIES AND STYLES;
import React, { useContext, useEffect, useState } from "react";
import styles from './FavoritePage.module.css';
// IMPORTING IMAGE
import likeimg from '../../images/likedmusic.jpg'
// IMPORTING OTHER COMPONENTS;
import Details from "../assets/Details";
import Songs from "../SongTable/Songs";
// AUTHENTICATION CONTEXT AND FUNCTION;
import Authcontext from "../Context/AuthContext";
import { gettingLikedSongs } from "../Logic/Logic";

export default function FavoritePage() {

    const Authentication = useContext(Authcontext);
    const token = Authentication.User[0] && Authentication.User[0].JWT;

    const [likedSongs, setLikedSongs] = useState([]);

    async function getFavouriteSongData(token) {
        const favouriteSongs = await gettingLikedSongs(token);
        setLikedSongs([...favouriteSongs]);
    }

    useEffect(() => {
        if (Authentication.User[0]) {
            getFavouriteSongData(token);
        }
    }, [Authentication.User[0], Authentication.LikedSongs[0]])

    return (
        <div className={styles.favoritepage}>
            <Details image={likeimg} title={'Melodic Musings: My Favorite Tunes'} discription={'Discover the melodies that move me! Dive into a curated selection of my favorite tunes, ranging from soothing rhythms to energetic beats. Let the music speak for itself.'} />
            <Songs songs={likedSongs} />
        </div>
    )
}