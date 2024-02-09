import React from "react";
import styles from './Navbtn.module.css';
import { NavLink } from "react-router-dom";
export default function Navbtn({children,text}){
    return (
        <div className={styles.navbtn}>
            <NavLink style={{color:'inherit', font:'inherit',textDecoration:'inherit', display:'flex',gap:'8px'}}>
                {children}
                <span className={styles.menubtntext}>{text}</span>
            </NavLink>
        </div>
    )

}