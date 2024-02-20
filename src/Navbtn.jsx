import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbtn({ children, text, linkto, style}) {
    return (
        <NavLink to={`${linkto}`} style={({isActive})=>({
            color: 'inherit',
            font: 'inherit',
            textDecoration: 'inherit',
            display: 'flex',
            alignItems:'center',
            gap: '8px',
            textTransform: 'capitalize',
            height: 'fit-content',
            borderRadius: '6px',
            padding: '4px',
            marginBottom: '2px',
            cursor: 'pointer',
            backgroundColor: isActive && '#39393b',
            ...style
        })}
        onClick={(e)=> {!linkto && e.preventDefault()}}
        >
            {children}
            {text && <span style={{
                fontWeight: '500',
                color: '#ffffffeb'
            }}>
                {text}
            </span>}
        </NavLink>

    )
}
// background-color: #39393b