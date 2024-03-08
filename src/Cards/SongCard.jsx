// IMPORT REACT AND STYLES;
import React, { useContext } from "react";
import styles from './SongCard.module.css';
// IMPORTING ICONS FROM MATERIAL UI;
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Authcontext from "../Context/AuthContext";
import { toast } from 'react-toastify';

export default function SongCard({ data }) {
    const Authentication = useContext(Authcontext);
    const Token = Authentication.User[0] && Authentication.User[0].JWT;

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

    return (
        <div className={styles.card}>
            <div className={styles.details}>
                <h2 className={styles.title}>{data.title}</h2>
                <p className={styles.discription}>Apple Music</p>
            </div>
            <img src={data.thumbnail} alt="" />
            <span className={styles.playbtn}>
                <PlayArrowIcon sx={{ color: '#fa586a', width: '0.9em', height: '0.9em' }} />
            </span>
            <span className={styles.likebtn} onClick={manageLike}>
                {Authentication.LikedSongs[0].includes(data._id) ?
                    <FavoriteIcon sx={{ color: '#fa586a', width: '0.9em', height: '0.9em' }} /> :
                    <FavoriteBorderIcon sx={{ color: '#fa586a', width: '0.9em', height: '0.9em' }} />
                }
            </span>
        </div>
    )
}