import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbtn({ children, text, linkto}) {
    return (
        <NavLink to={`${linkto}`} style={({isActive})=>({
            color: 'inherit',
            font: 'inherit',
            textDecoration: 'inherit',
            display: 'flex',
            gap: '8px',
            textTransform: 'capitalize',
            height: '32px',
            borderRadius: '6px',
            padding: '4px',
            marginBottom: '2px',
            cursor: 'pointer',
            backgroundColor: isActive && '#39393b'
        })}
        onClick={(e)=> {!linkto && e.preventDefault()}}
        >
            {children}
            <span style={{
                fontWeight: '500',
                color: '#ffffffeb'
            }}>
                {text}
            </span>
        </NavLink>

    )
}
// background-color: #39393b