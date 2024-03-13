// IMPROTING REACT AND STYLES
import React, { useContext, useState } from "react";
import styles from './Controls.module.css';
// IMPORTING ICONS;
import { FaShuffle, FaRepeat } from "react-icons/fa6";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiMiniBackward, HiMiniForward } from "react-icons/hi2";
// IMPORT AUDIO CONTEXT;
import AudioContext from '../Context/AudioContext'


export default function Controls() {
    const { isPlaying, playPause } = useContext(AudioContext);

    return (
        <div className={styles.controls}>
            <FaShuffle cursor={'pointer'} />
            <HiMiniBackward size={'1.3em'} cursor={'pointer'} />
            {isPlaying ? <FaPause size={'1.4em'} cursor={'pointer'} onClick={playPause} /> :
                <FaPlay size={'1.4em'} cursor={'pointer'} onClick={playPause} />   
            }
            <HiMiniForward size={'1.3em'} cursor={'pointer'} />
            <FaRepeat cursor={'pointer'} />
        </div>
    )
}