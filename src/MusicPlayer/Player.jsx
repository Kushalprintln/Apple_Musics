// IMPORT REACT AND STYLES;
import React from "react";
import styles from './Player.module.css';
// IMPORT ICONS;
import { HiMusicalNote } from "react-icons/hi2";
import { IoLogoApple } from "react-icons/io5";

export default function Player({ song }) {
    // console.log(song)
    return (
        <div className={styles.player}>
            <div className={styles.playerImg}>
                {song ?
                    <img src={song.thumbnail} alt="" style={{ width: '100%' }} /> :
                    <HiMusicalNote size={'1.5em'} />}
            </div>
            <div className={styles.playstatus}>
                {song ?
                    <>
                        <div className={styles.playsong}>
                            <div className={styles.Playsongdetails}>
                                <h5>{song.title}</h5>
                                <h5 style={{ color: 'rgba(255, 255, 255, 0.64)' }}>Apple Musics</h5>
                            </div>
                            <div className={styles.seekContainer}>
                                <span className={styles.progresstime}>0:00</span>
                                <div className={styles.seek}>
                                    <input type="range" name="" id="" className={styles.progressrange} min={0} max={100}/>
                                    <div className={styles.progress}></div>
                                    <div className={styles.seekdot}></div>
                                </div>
                                <span className={styles.progresstime}>0:00</span>
                            </div>
                        </div>
                    </>
                    :
                    <IoLogoApple size={'1.5em'} />}
            </div>
        </div>
    )
}