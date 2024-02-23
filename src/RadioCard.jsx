import React from "react";
import styles from './RadioCard.module.css';
import radioimg from '../images/radiomage.webp'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
export default function RadioCard(){
    return (
        <div className={styles.radiocard}>
            <div className={styles.radioimgcontainer}>
                <img src={radioimg} alt="" className={styles.channelimage}/>
                <span className={styles.playlogo}>
                    <PlayArrowRoundedIcon sx={{height:'2em',width:'2em'}}/>
                </span>
            </div>
            <section className={styles.radioinfo}>
                <h4>Hot 97</h4>
                <p>TuneIn</p>
            </section>
            <MoreHorizRoundedIcon sx={{color: '#fa586a',marginRight:'10px'}}/>
        </div>
    )
}