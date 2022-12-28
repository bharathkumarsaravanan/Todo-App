import React from "react";
import { motion } from "framer-motion";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";


function Navbar(){

    const [hov, setHov] = useState('');

    useEffect(() => {
        console.log(localStorage.getItem('login'))
    },[])
    
    return(
        <motion.div
            initial={{y:'-5rem'}}
            animate={{y:'0'}}
            transition={{duration:1}} 
            className="navBar">
                <NavLink exact to='home'
                    onMouseOver={() => setHov('home')} onMouseOut={() => setHov('')}>
                    <motion.div
                        animate={{scale:[0,1.2,1]}}
                        transition={{duration:.4,delay:1}}>
                        {hov==='home'?'H O M E':<HomeIcon fontSize="large" />}
                    </motion.div> 
                </NavLink>
                <NavLink exact to='projects' 
                    onMouseOver={() => setHov('projects')} onMouseOut={() => setHov('')}>
                    <motion.div
                        animate={{scale:[0,1.2,1]}}
                        transition={{duration:.4,delay:1}}>
                        {hov==='projects'?'P R O J E C T S':<WorkIcon fontSize="large" />}
                    </motion.div>
                </NavLink>
                <NavLink exact to='progress' 
                    onMouseOver={() => setHov('progress')} onMouseOut={() => setHov('')}>
                    <motion.div
                        animate={{scale:[0,1.2,1]}}
                        transition={{duration:.4,delay:1}}>
                        {hov==='progress'?'P R O G R E S S':<EqualizerIcon fontSize="large" />}
                    </motion.div>
                </NavLink>
                <NavLink exact to='settings' 
                    onMouseOver={() => setHov('settings')} onMouseOut={() => setHov('')}>
                    <motion.div
                        animate={{scale:[0,1.2,1]}}
                        transition={{duration:.4,delay:1}}>
                        {hov==='settings'?'S E T T I N G S':<SettingsIcon fontSize="large" />}
                    </motion.div>
                </NavLink>
        </motion.div>
    )
}
export default Navbar;