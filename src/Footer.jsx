import React from "react";
import styles from './Footer.module.css';
export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.country}>
                <p className={styles.us}>United States</p>
                <ul>
                    <li>Español (México)</li>
                    <li>Русский</li>
                    <li>Français (France)</li>
                    <li>Português (Brazil)</li>
                    <li>Tiếng Việt</li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <p>Copyright <span>Apple Inc.</span> All right reserved.</p>
                <ul>
                    Internet Service Terms
                    <li>Apple Musics & Privicy</li>
                    <li>Cookie Warning</li>
                    <li>Support</li>
                    <li>Feedback</li>
                </ul>
            </div>
        </div>
    )
}