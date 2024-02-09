import React, { useState } from "react";
import styles from './Controls.module.css';

import { FaShuffle,FaRepeat } from "react-icons/fa6";
import { FaPlay,FaPause } from "react-icons/fa";
import { HiMiniBackward,HiMiniForward} from "react-icons/hi2";


export default function Controls(){
    const [mt,setmt] = useState(false);

    function toggle(){
        setmt(prev=>!prev);
    }
    return (
        <div className={styles.controls}>
            <FaShuffle cursor={'pointer'}/>
            <HiMiniBackward size={'1.3em'} cursor={'pointer'}/>
            {!mt && <FaPlay size={'1.4em'} cursor={'pointer'} onClick={toggle}/>}
            {mt && <FaPause size={'1.4em'} cursor={'pointer'} onClick={toggle}/>}
            <HiMiniForward size={'1.3em'} cursor={'pointer'}/>
            <FaRepeat cursor={'pointer'}/>
        </div>
    )
}