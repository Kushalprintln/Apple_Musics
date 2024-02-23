import React from "react";
export default function RadioCardConatiner({children}){
    const ContainerCSS ={
        width:"fit-content",
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        marginRight:'20px'
    }
    return (
        <div style={ContainerCSS}>
            {children}
        </div>
    )
}