import React, {useEffect} from "react";
import {Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import imgLink from "../Stocks/Profile.JPG";
import {motion, useAnimation} from "framer-motion";

function Header(){
    
    const animation = useAnimation();

    useEffect(() => {
        animation.start({
            scale:[0,2,1],
            transition: {
                duration: .7, type: 'spring', bounce: .5, delay:2
            }
        })
    },[])
    
    return(
        <motion.div 
            animate={{y:[-350,0],opacity:[0,1]}}
            transition={{delay:1, duration:1}}
            className="userHeader">

            <motion.div
                animate={{opacity:[0,0,1], x:[-200,0]}}
                transition={{delay:2, opacity:{duration: 1.7}, x:{duration:1.5}}}>
              <img src={imgLink}/>
            </motion.div>

            <motion.div
                animate={{opacity:[0,0,1], x:[-200,0]}}
                transition={{delay:2,opacity:{duration: 1.7}, x:{duration:1.5}}}>
                <Typography variant="h2">Bharath Kumar S</Typography><br/>
                <Typography variant="h5">Web Developer</Typography>
            </motion.div>
            <div>
                <LinkedInIcon 
                    component={motion.svg}
                    animate={animation}
                    fontSize="large" />
                <EmailIcon 
                    component={motion.svg}
                    animate={animation}
                    fontSize="large" />
            </div>
        </motion.div>
    )
}

export default Header;