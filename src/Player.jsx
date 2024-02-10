import React from "react";
import styles from './Player.module.css';
import { HiMusicalNote } from "react-icons/hi2";
import { IoLogoApple } from "react-icons/io5";
export default function Player(){
    return (
        <div className={styles.player}>
            <div className={styles.playerImg}>
                <HiMusicalNote size={'1.5em'}/>
            </div>
            <div className={styles.playstatus}>
                <IoLogoApple size={'1.5em'}/>                
            </div>
        </div>
    )
}