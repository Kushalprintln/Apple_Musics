// IMPORTING REACT AND STYLES;
import React from "react";
import styles from './Mainsection.module.css';
// IMPORTING OUTLET AND FOOTER COMPONENT;
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

// MAINSECTION COMPONENT IS CONTAINING THE PAGE ON WHICH WE ARE AND THE FOOTER SO THAT WE CAN SCROLL DOWN FOR THE FOOTER
// THE PAGE THAT NEEDS TO BE DISPLAYED WILL COME ON THE OUTLET;

export default function Mainsection() {
    return (
        <div className={styles.main}>
            <Outlet />
            <Footer />
        </div>
    )
}