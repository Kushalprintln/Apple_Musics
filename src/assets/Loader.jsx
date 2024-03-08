// LOADER COMPONNET FOR SHOWING LOADING
import React from "react";
import loader from '../../images/AppleLoading.gif'
export default function Loader(){
    const styles = {
        width:'30px'
    }
    return (
        <img src={loader} alt="" style={styles}/>
    )
}