import React from "react";
import styles from './Mainsection.module.css';
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function Mainsection(){
    return (
        <div className={styles.main}>
            <Outlet/>
            <Footer/>
        </div>
    )
}