// IMPORT REACT AND STYLES;
import React, { useContext, useRef, useState } from "react";
import styles from './Songrow.module.css';
// IMPORTING ICONS;
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// IMPORTING AUTHENTICATION;
import Authcontext from "../Context/AuthContext";
import { toast } from 'react-toastify';

export default function Songrow({ data, bg, artist, album }) {
    const Authentication = useContext(Authcontext);
    const Token = Authentication.User[0] && Authentication.User[0].JWT;
    const audio = new Audio(data.audio_url);
    const [duration,setDuration] = useState(0);
    audio.addEventListener('loadedmetadata',()=>{
        setDuration(audio.duration);
    })
    
    //REQUIRMENTS;
    const LikeSongURL = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
    const header = { 'projectId': 'f104bi07c490', 'Authorization': `Bearer ${Token}`, 'Content-Type': 'application/json' };

    async function LikeSong() {
        const resp = await fetch(LikeSongURL, {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify({ "songId": data._id })
        })
        // console.log("Response", resp);
        const likedsong = await resp.json();
        // console.log("status", likedsong);
        // console.log("status", likedsong.data.songs);
        if (resp.ok) {
            let msg = likedsong.message;
            if (msg === 'song added to favorites successfully.') {
                Authentication.LikedSongs[1](prev => [...prev, data._id]);
                toast.success(msg, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    style: { textTransform: 'capitalize' }
                });
            } else {
                let updateLikedSongs = Authentication.LikedSongs[0].filter(item => item !== data._id);
                Authentication.LikedSongs[1]([...updateLikedSongs]);
                toast.info(msg, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    style: { textTransform: 'capitalize' }
                });
            }
        }
    }

    function manageLike() {
        if (Authentication.User[0]) {
            LikeSong();
        } else {
            Authentication.singupModal(true);
        }
    }

    function HandleMusic(){
        Authentication.SelectedSong[1](data);
        Authentication.audref.current = audio;
    }

    return (
        <div style={{ backgroundColor: bg ? '#232323' : null }} className={styles.songrow}>
            <div className={styles.songdetails} onClick={HandleMusic}>
                <span className={styles.song}>
                    <img src={data.thumbnail} alt="" />
                    {data.title}
                </span>
                <span className={styles.artist}>
                    {artist ? `${artist}` : `Artist Name`}
                </span>
                <span className={styles.album}>
                    {album ? `${album}` : `Album Name`}
                </span>
                <span className={styles.time}>{duration.toFixed(2)}</span>
            </div>
            <span className={styles.like} onClick={manageLike}>
                {Authentication.LikedSongs[0].includes(data._id) ?
                    <FavoriteIcon sx={{ color: '#fa586a', width: '0.9em', height: '0.9em' }} /> :
                    <FavoriteBorderIcon sx={{ color: '#fa586a', width: '0.9em', height: '0.9em' }} />
                }
            </span>
        </div>
    )
}