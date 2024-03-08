// THIS CONTAINER IS HOLDING 2 RADIO CARDS TO COMBINE IN THE CAROUSEL;
import React from "react";
export default function RadioCardConatiner({ children }) {
    const ContainerCSS = {
        width: "fit-content",
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginRight: '29px'
    }
    return (
        <div style={ContainerCSS}>
            {children}
        </div>
    )
}