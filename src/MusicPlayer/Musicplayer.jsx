// IMPORTING REACT AND STYLES
import React, { useContext } from "react";
import styles from './Musicplayer.module.css';
// IMPORTING OTHER COMPONENTS;
import Controls from "./Controls";
import Player from "./Player";
import Volume from "./Volume";
import SingInBtn from "../Buttons/SignInBtn";
import UserBtn from "../Buttons/UserBtn";
// IMPROTING AUTHCONTEXT;
import Authcontext from "../Context/AuthContext";

export default function Musicplayer({ showDetails }) {

    const Authentication = useContext(Authcontext);
    // console.log(Authentication.SelectedSong);

    return (
        <div className={styles.musicplayer}>
            {showDetails && <div className={styles.controlscontainer}>
                <Controls />
            </div>}
            <Player song={Authentication.SelectedSong[0]} />
            {showDetails && <Volume />}
            <div className={styles.signInSection}>
                {Authentication.User[0] ? <UserBtn /> : <SingInBtn />}
            </div>
        </div>
    )
}