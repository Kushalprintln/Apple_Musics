// IMPORTING REACT AND STYLES
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from './Musicplayer.module.css';
// IMPORTING OTHER COMPONENTS;
import Controls from "./Controls";
import Player from "./Player";
import Volume from "./Volume";
import SingInBtn from "../Buttons/SignInBtn";
import UserBtn from "../Buttons/UserBtn";
// IMPROTING CONTEXTS;
import Authcontext from "../Context/AuthContext";
import AudioContext from '../Context/AudioContext'


export default function Musicplayer({ showDetails }) {

    const Authentication = useContext(Authcontext);
    // console.log("Seleted Song", Authentication.SelectedSong[0]);
    // console.log("Reference", Authentication.audref);

    // REQUIRED STATES FOR PLAYING MUSIC;
    const audioRef = Authentication.audref;
    const [audio, setAudio] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
                clearPreviousPlaysong()
                const audioElement = audioRef.current;
                setAudio(audioElement);
    }, [Authentication.SelectedSong[0]]);

    useEffect(()=>{
        if(audio){
            audio.volume = volume;
            audio.play();
            audio.addEventListener('timeupdate', updateTime);
            audio.addEventListener('ended', () => setIsPlaying(false));
            setIsPlaying(true);
        }
        // return () => {
        //     audio.removeEventListener('timeupdate', updateTime);
        //     audio.removeEventListener('ended', () => setIsPlaying(false));
        // };
    },[audio])

    useEffect(()=>{
        if(audio){
            audio.volume = volume;;
        }
    },[volume])

    function clearPreviousPlaysong(){
        if (isPlaying) {
            playPause();
            // console.log('song was playing');
        }
        // console.log("clearing times");
        setCurrentTime(0);
        setDuration(0);
    }

    function playPause() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    function updateTime() {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
        // console.log(audio.currentTime);
        // console.log(audio.duration);
    };

    function setCurrentTimeAudio(time){
        audio.currentTime = time;
    };

    function setVolumeAudio(value){
        setVolume(value);
    };

    return (
        <div className={styles.musicplayer}>
            <AudioContext.Provider
                value={{
                    audioRef,
                    isPlaying,
                    currentTime,
                    duration,
                    volume,
                    playPause,
                    setCurrentTimeAudio,
                    setVolumeAudio,
                }}
            >
                {showDetails && <div className={styles.controlscontainer}>
                    <Controls />
                </div>}
                <Player song={Authentication.SelectedSong[0]} />
                {showDetails && <Volume />}
            </AudioContext.Provider>
            <div className={styles.signInSection}>
                {Authentication.User[0] ? <UserBtn /> : <SingInBtn />}
            </div>
        </div>
    )
}