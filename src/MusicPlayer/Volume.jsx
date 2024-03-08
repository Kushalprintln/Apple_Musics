// IMPORTING REACT 
// THIS COMPONENT IS OF IMPORTED FROM MATERIAL UI; 
// VOLUME ICON AND SLIDER;

import React from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
export default function Volume() {
    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     setValue(newValue as number);
    // };
    const volcss = {width:'0.8em',height:'0.8em' }
    return (
        // <Box sx={{ width: 150 }}>
        <Stack spacing={1} direction="row" sx={{ mb: 0, minWidth:'88px'}} alignItems="center" >
            <VolumeDown sx={volcss} />
            <Slider aria-label="Volume" size="small" sx={{
                "& .MuiSlider-thumb": {width: 10,height: 10,
                "&:before": {boxShadow: "0 4px 8px rgba(0,0,0,0.4)"},
                "&:hover, &.Mui-focusVisible, &.Mui-active": {boxShadow: "none"}},
                width:'60px'
            }} 
            defaultValue={20}
            />
        </Stack>
        // </Box>
    )
}

// value={value} onChange={handleChange}