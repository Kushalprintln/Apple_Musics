// IMPORT REACT AND STYLES;
import React, { useState } from "react";
import styles from './Navbar.module.css';
// LOGO AND NAVIGATION BTN COMPONENT
import logo from '../../images/logo-removebg-preview.png'
import Navbtn from "./Navbtn";
// IMPORTING ICONS FROM MATERIAL UI;
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import AudiotrackRoundedIcon from '@mui/icons-material/AudiotrackRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
// REACT ROUTER;
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();
    const [searchSong, setSearchSong] = useState('');

    function searchsong(event) {
        event.preventDefault();
        navigate(`search/${searchSong}`);
        setSearchSong('');
    }
    return (
        <div className={styles.navbar}>
            <Link to={'/'} style={{ display: "flex" }}><img src={logo} alt="" className={styles.logo} /></Link>
            <Link to={'/search'} style={{ textDecoration: 'none' }}>
                <div className={styles.search}>
                    <SearchIcon />
                    <form action="" style={{ display: 'flex' }} onSubmit={searchsong}>
                        <input type="text" value={searchSong} placeholder="Search" onChange={(e) => { setSearchSong(e.target.value) }} />
                    </form>
                </div>
            </Link>
            <div className={styles.menu}>
                <Navbtn text='listen now' linkto='/'>
                    <PlayCircleOutlineOutlinedIcon sx={{ color: '#fa586a' }} />
                </Navbtn>
                <Navbtn text='browse' linkto='browse'>
                    <WindowOutlinedIcon sx={{ color: '#fa586a' }} />
                </Navbtn>
                <Navbtn text='Favorite Songs' linkto='favorite'>
                    <FavoriteIcon sx={{ color: '#fa586a' }} />
                </Navbtn>
                <Navbtn text='radio' linkto='radio'>
                    <GraphicEqRoundedIcon sx={{ color: '#fa586a' }} />
                </Navbtn>
            </div>
            <div className={styles.app}>
                <hr style={
                    {
                        width: '260px',
                        marginLeft: '-25px',
                        color: 'black'
                    }
                } />
                <br />
                <Navbtn text='open in music ↗'>
                    <AudiotrackRoundedIcon sx={{ color: '#ffffffeb' }}
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