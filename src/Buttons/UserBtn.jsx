// IMPORT REACT AND STYLES;
import React, { useContext, useState } from "react";
import styles from './UserBtn.module.css';
// IMPORTING ICONS FROM MATERIAL UI;
// (This component is also containing dropdown);
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Authcontext from "../Context/AuthContext";
import { Link } from "react-router-dom";
export default function UserBtn() {
    const [dropDown, setDropDown] = useState(false);

    const Authentication = useContext(Authcontext);

    function singOut(){
        Authentication.User[1](null);
        Authentication.LikedSongs[1]([]);
        localStorage.removeItem('user');
        setDropDown(false);
    }

    return (
        <div className={styles.userbtn}>
            <PersonIcon sx={{
                color: '#fa586a',
                height: '1.2em',
                width: '1.2em',
                border: '3px solid',
                borderRadius: '50%',
                cursor: 'pointer'
            }} onClick={()=>{setDropDown(prev=>!prev)}}/>
            {dropDown &&
                <div className={styles.userdropdown}>
                    <ul>
                        <li onClick={()=>{setDropDown(false)}}>
                            <Link to={'./subscribe'} style={{display:'inherit',color:'inherit',justifyContent:'inherit',width:'100%',textDecoration:'none'}}>
                                Subscribe
                                <NotificationsIcon sx={{height: '0.7em', width: '0.7em' }} />
                            </Link>
                        </li>
                        <li onClick={()=>{setDropDown(false)}}>
                        <Link to={'./setting'} style={{display:'inherit',color:'inherit',justifyContent:'inherit',width:'100%',textDecoration:'none'}}>
                            Setting
                            <SettingsIcon sx={{height: '0.7em', width: '0.7em' }} />
                            </Link>
                        </li>
                        <li style={{color:'#fa586a'}} onClick={singOut}>Sign Out</li>
                    </ul>
                </div>
            }
        </div>
    )
}