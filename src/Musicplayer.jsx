import React, { useContext } from "react";
import styles from './Musicplayer.module.css';
import Controls from "./Controls";
import Player from "./Player";
import Volume from "./Volume";
import { TfiMenuAlt } from "react-icons/tfi";
import SingInBtn from "./SignInBtn";

import Authcontext from "./AuthContext";
import UserBtn from "./UserBtn";

export default function Musicplayer({showDetails}){

    const Authentication = useContext(Authcontext);
    console.log(Authentication.SelectedSong);

    return(
        <div className={styles.musicplayer}>
            {showDetails && <div className={styles.controlscontainer}>
                <Controls/>
            </div>}
                <Player song={Authentication.SelectedSong[0]}/>
            {showDetails && <Volume/>}
            <div className={styles.signInSection}>
            {showDetails && <TfiMenuAlt />}
            {Authentication.User[0] ? <UserBtn/> : <SingInBtn />}
            </div>
        </div>
    )
}