// IMPORT REACT AND STYLES;
import React from "react";
import styles from './Songs.module.css';
// IMPORTING SONGS ROW;
import Songrow from "./Songrow";
export default function Songs({ songs, album, artist }) {
    return (
        <>
            <div className={styles.songs}>
                <span className={styles.song}>Song</span>
                <span className={styles.artist}>Artist</span>
                <span className={styles.album}>Album</span>
                <span className={styles.time}>Time</span>
            </div>
            {songs.map((ele, idx) => {
                return <Songrow data={ele} key={idx} bg={(idx % 2) === 0 ? true : false} album={album} artist={artist} />
            })
            }
        </>
    )
}