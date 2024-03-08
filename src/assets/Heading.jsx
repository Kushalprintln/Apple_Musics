// IMPORTING REACT AND APPLYING INLINE CSS OF THIS COMPONENT;
// THIS COMPONENT IS ONLY RETURNING A HEADING;
import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Heading({text}){
    return(
        <div style={{marginBottom:'13px'}}>
            <h2 style={{fontSize:'17px',fontWeight:'700',lineHeight:'1.3',display:'flex',alignItems:'center',gap:'6px',textTransform:'capitalize'}}>
                {text} 
                <span style={{display:'flex',color:'#7c7c7c'}}>
                    <ArrowForwardIosIcon fontSize="1.7em"/>
                </span>
            </h2>
        </div>
    )
}