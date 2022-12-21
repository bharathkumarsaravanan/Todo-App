import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, NavLink } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import SpeakerNotesTwoToneIcon from '@mui/icons-material/SpeakerNotesTwoTone';
import { useState } from "react";
import { Outlet } from "react-router-dom";


function Navbar(){
    const [navVisible, setNavVisible] = useState(false);
    return(
        <div className="navBar" style={{marginLeft: navVisible?'0':'-15.5rem'}}>
            <div className="navIcon" style={{left:'1rem'}}>
                <SpeakerNotesTwoToneIcon fontSize="large" />
            </div>
    
            <DehazeIcon 
                className="barIcon" 
                style={{transform: navVisible&&'rotate(90deg)'}} 
                onClick={() => setNavVisible(prev => !prev)} />
            <div className="navContents">
                <NavLink exact to='home'>
                    <Typography variant="h5" component={motion.div}>Home</Typography>  
                    <div><HomeIcon fontSize="large" /></div> 
                </NavLink>
                <NavLink exact to='projects'>
                    <Typography variant="h5" component={motion.div}>Projects</Typography>  
                    <div><WorkIcon fontSize="large" /></div>
                </NavLink>
                <NavLink exact to='progress'>
                    <Typography variant="h5" component={motion.div}>Progress</Typography> 
                    <div><EqualizerIcon fontSize="large" /></div>
                </NavLink>
                <NavLink exact to='settings'>
                    <Typography variant="h5" component={motion.div}>About</Typography> 
                    <div><SettingsIcon fontSize="large" /></div>
                </NavLink>
            </div>
        </div>
    )
}
export default Navbar;