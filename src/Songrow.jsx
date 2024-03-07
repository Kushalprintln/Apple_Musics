import React, { useContext } from "react";
import styles from './Songrow.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Authcontext from "./AuthContext";
import { toast } from 'react-toastify';

export default function Songrow({ data, bg, artist, album }) {
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
            //  toast.success('Password Changed Successfully', {
            //      position: "top-center",
            //      autoClose: 3000,
            //      hideProgressBar: true,
            //      closeOnClick: true,
            //      pauseOnHover: true,
            //      draggable: true,
            //      progress: undefined,
            //      theme: "dark",
            //  });
            // Authentication.LikedSongs[1]([...likedsong.data.songs]);
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

        } else {
            //  toast.error(`${status.message}`, {
            //      position: "top-center",
            //      autoClose: 3000,
            //      hideProgressBar: true,
            //      closeOnClick: true,
            //      pauseOnHover: true,
            //      draggable: true,
            //      progress: undefined,
            //      theme: "dark",
            //  });
        }
    }

    function manageLike() {
        if (Authentication.User[0]) {
            LikeSong();
        } else {
            Authentication.singupModal(true);
        }
    }

    function setsong() {
        console.log(Authentication.SelectedSong);
        Authentication.SelectedSong[1](data);
    }

    function setAndPlaySong(){
        setsong();
        const music = new Audio(data.audio_url);
        // music.play();
    }

    return (
        <div style={{ backgroundColor: bg ? '#232323' : null }} className={styles.songrow} onClick={setAndPlaySong}>
            <div className={styles.songdetails} onClick={setsong}>
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
                <span className={styles.time}>Time</span>
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