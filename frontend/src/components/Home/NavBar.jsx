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
import { useState, useEffect } from "react";


function Navbar(){
    const [navVisible, setNavVisible] = useState(false);
    useEffect(() => {
        console.log(localStorage.getItem('login'))
    },[])
    return(
        <div className="navBar" style={{width: navVisible?'18rem':'4rem'}}>
            {navVisible&&<div className="navIcon" style={{left:'1rem'}}>
                <SpeakerNotesTwoToneIcon 
                    fontSize="large" 
                    animate={{scale:[0,1]}}
                    transition={{delay:.1}}
                    component={motion.svg}
                    />
            </div>}
    
            <DehazeIcon 
                className="barIcon" 
                style={{transform: navVisible&&'rotate(90deg)'}} 
                onClick={() => setNavVisible(prev => !prev)} />
            <div className="navContents">
                <NavLink exact to='home'>
                    <div><HomeIcon fontSize="large" /></div> 
                   {navVisible&& <Typography 
                        variant="h5" 
                        animate={{opacity:[0,1]}}
                        transition={{delay:.2}} 
                        component={motion.div}>Home</Typography> }

                </NavLink>
                <NavLink exact to='projects'>
                    <div><WorkIcon fontSize="large" /></div>
                    {navVisible&&<Typography 
                        variant="h5"
                        animate={{opacity:[0,1]}}
                        transition={{delay:.2}} 
                        component={motion.div}>Projects</Typography>}  

                </NavLink>
                <NavLink exact to='progress'>
                    <div><EqualizerIcon fontSize="large" /></div>
                    {navVisible&&<Typography 
                        variant="h5" 
                        animate={{opacity:[0,1]}}
                        transition={{delay:.2}} 
                        component={motion.div}>Progress</Typography>} 

                </NavLink>
                <NavLink exact to='settings'>
                    <div><SettingsIcon fontSize="large" /></div>
                    {navVisible&&<Typography 
                        variant="h5"
                        animate={{opacity:[0,1]}}
                        transition={{delay:.2}}  
                        component={motion.div}>About</Typography>} 

                </NavLink>
            </div>
        </div>
    )
}
export default Navbar;