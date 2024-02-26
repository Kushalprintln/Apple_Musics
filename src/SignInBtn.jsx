import React, { useContext } from "react";
import { IoPerson } from "react-icons/io5";
import Authcontext from "./AuthContext";
export default function SingInBtn(){
    const Auth = useContext(Authcontext);
    // console.log(Auth)

    function SetLoginModal(){
        Auth.singupModal(true);
    }
    return (
    <button style={{width:'88px',
        height:'28px',
        color:'#ffffff',
        backgroundColor:'#d60017',
        padding:'0px 12px',
        fontSize:'13px',
        fontWeight:'600',
        borderRadius:'6px',
        border:'none',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'3px',
        letterSpacing:'1px',
        cursor:'pointer'
    }} onClick={SetLoginModal}>
        <IoPerson /> Sign In
    </button>
    )
}