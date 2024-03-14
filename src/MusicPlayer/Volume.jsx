// IMPORTING REACT 
// THIS COMPONENT IS OF IMPORTED FROM MATERIAL UI; 
// VOLUME ICON AND SLIDER;

import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import AudioContext from '../Context/AudioContext'
export default function Volume() {

    const { volume, setVolumeAudio } = useContext(AudioContext);

    const handleVolumeChange = (e) => {
        setVolumeAudio(e.target.value);
    };

    const volcss = { width: '0.8em', height: '0.8em' }
    return (
        <Stack spacing={1} direction="row" sx={{ mb: 0, minWidth: '88px' }} alignItems="center" >
            {volume === 0 ? <VolumeMuteIcon sx={volcss} /> :
                volume < 0.5 ? <VolumeDown sx={volcss} /> :
                    <VolumeUp sx={volcss} />
            }
            <Slider aria-label="Volume" size="small" sx={{
                "& .MuiSlider-thumb": {
                    width: 10, height: 10,
                    "&:before": { boxShadow: "0 4px 8px rgba(0,0,0,0.4)" },
                    "&:hover, &.Mui-focusVisible, &.Mui-active": { boxShadow: "none" }
                },
                width: '60px',
            }}
                defaultValue={0.1}
                value={volume}
                min={0}
                max={1}
                step={0.1}
                onChange={handleVolumeChange}
            />
        </Stack>
    )
}
