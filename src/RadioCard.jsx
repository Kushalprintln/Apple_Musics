import React from "react";
import styles from './RadioCard.module.css';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
export default function RadioCard({data}){
    console.log(data)
    return (
        <div className={styles.radiocard}>
            <div className={styles.radioimgcontainer}>
                <img src={data.img} alt="" className={styles.channelimage}/>
                <span className={styles.playlogo}>
                    <PlayArrowRoundedIcon sx={{height:'2em',width:'2em'}}/>
                </span>
            </div>
            <section className={styles.radioinfo}>
                <h4>{data.radio}</h4>
                <p>{data.dis}</p>
            </section>
            <MoreHorizRoundedIcon sx={{color:'#fa586a',marginRight:'10px'}}/>
        </div>
    )
}