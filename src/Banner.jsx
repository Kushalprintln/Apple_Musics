import React from "react";
import banner from '../images/large (1).webp';
export default function Banner(){
    return (
        <div className='bannercontainer'>
            <img src={banner} alt="" width={'44.8%'}/>
        </div>
    )
}