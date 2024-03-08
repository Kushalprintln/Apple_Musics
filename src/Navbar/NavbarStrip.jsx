// IMPORTING REACT AND STYLES;
import React from "react";
import styles from './NavbarStrip.module.css';
import { Link } from "react-router-dom";
import appleLogo from '../../images/apple logo.png';
// IMPORTING ICONS FROM MATERIAL UI;
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AudiotrackRoundedIcon from '@mui/icons-material/AudiotrackRounded';

import Navbtn from "./Navbtn";
export default function NavbarStrip() {
    return (
        <div className={styles.NavbarStrip}>
            <Link to={'/'} style={{ display: "flex" }}><img src={appleLogo} alt="" className={styles.logo} /></Link>
            <Link to={'/search'}><SearchIcon sx={{ color: '#ffffffeb', fontSize: '2em', margin: '20px 0', cursor: 'pointer' }} /></Link>
            <div className={styles.menu}>
                <Navbtn linkto='/' style={{ justifyContent: 'center' }}>
                    <PlayCircleOutlineOutlinedIcon sx={{ color: '#fa586a', fontSize: '2em' }} />
                </Navbtn>
                <Navbtn linkto='browse' style={{ justifyContent: 'center' }}>
                    <WindowOutlinedIcon sx={{ color: '#fa586a', fontSize: '2em' }} />
                </Navbtn>
                <Navbtn linkto='favorite' style={{ justifyContent: 'center' }}>
                    <FavoriteIcon sx={{ color: '#fa586a', fontSize: '2em' }} />
                </Navbtn>
                <Navbtn linkto='radio' style={{ justifyContent: 'center' }}>
                    <GraphicEqRoundedIcon sx={{ color: '#fa586a', fontSize: '2em' }} />
                </Navbtn>
            </div>
            <div className={styles.app}>
                <hr style={
                    {
                        width: '54px',
                        marginBottom:'10px',
                        color: 'black'
                    }
                } />
                <Navbtn style={{ justifyContent: 'center' }}>
                    <AudiotrackRoundedIcon sx={{ color: '#ffffffeb', fontSize: '2em' }}
                        style={{
                            border: '2px solid',
                            borderRadius: '50%',
                            padding: '3px'
                        }}
                    />
                </Navbtn>
            </div>

        </div>
    )
}