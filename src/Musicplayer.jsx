import React, { useContext } from "react";
import styles from './Musicplayer.module.css';
import Controls from "./Controls";
import Player from "./Player";
import Volume from "./Volume";
import { TfiMenuAlt } from "react-icons/tfi";
import SingInBtn from "./SignInBtn";
export default function Musicplayer({showDetails}){

    return(
        <div className={styles.musicplayer}>
            {showDetails && <div className={styles.controlscontainer}>
                <Controls/>
            </div>}
                <Player/>
            {showDetails && <Volume/>}
            <div className={styles.signInSection}>
            {showDetails && <TfiMenuAlt />}
                <SingInBtn />
            </div>
        </div>
    )
}