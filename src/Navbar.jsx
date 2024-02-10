import React from "react";
import styles from './Navbar.module.css';
import logo from '../images/logo-removebg-preview.png'
import SearchIcon from '@mui/icons-material/Search';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import GraphicEqRoundedIcon from '@mui/icons-material/GraphicEqRounded';
import AudiotrackRoundedIcon from '@mui/icons-material/AudiotrackRounded';
import { Link } from "react-router-dom";
import Navbtn from "./Navbtn";
export default function Navbar(){
    return (
        <div className={styles.navbar}>
            <Link style={{display:"flex"}}><img src={logo} alt="" className={styles.logo}/></Link>
            <div className={styles.search}>
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
            </div>
            <div className={styles.menu}>
                <Navbtn text='listen now' linkto='/'>
                    <PlayCircleOutlineOutlinedIcon sx={{ color: '#fa586a' }}/>
                </Navbtn>
                <Navbtn text='browse' linkto='browse'>
                    <WindowOutlinedIcon sx={{ color: '#fa586a' }}/>
                </Navbtn>
                <Navbtn text='radio' linkto='radio'>
                    <GraphicEqRoundedIcon sx={{ color: '#fa586a' }}/>
                </Navbtn>
            </div>
            {/* <hr style={
                {
                    width: '260px',
                    marginLeft: '-25px',
                    color: 'black'
                }
            }/> */}
            <div className={styles.app}>
                <Navbtn text='open in music ↗'>
                    <AudiotrackRoundedIcon sx={{ color: '#ffffffeb' }}
                    style={{
                        border:'2px solid',
                        borderRadius:'50%',
                        padding:'3px'
                    }}
                    />
                </Navbtn>
            </div>
        </div>
    )
}