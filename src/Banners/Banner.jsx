import React from "react";
import styles from './Banner.module.css';
import banner from '../../images/large (1).webp';
export default function Banner(){
    return (
        <div className='bannercontainer'>
            <img src={banner} alt="" width={'40.2%'} className={styles.bannerImg}/>
        </div>
    )
}