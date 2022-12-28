import React, {useEffect} from "react";
import {Typography} from "@mui/material";
import {motion} from "framer-motion"

function Splash(){

    useEffect(() => {
        setTimeout(() =>{
            window.location.href ='/index/home'
        },4000)
    },[])

    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{y: -100, transition:{duration:.8}}}
            className="splash">
            <Typography 
                variant="h1">
                <motion.span
                    animate={{opacity:[0,1]}}
                    transition={{duration:1, delay:1}}
                    >T</motion.span>
                <motion.span
                    initial={{color:'rgba(93, 167, 219, .8)',opacity:0}}
                    animate={{color:'#a9aeb4',opacity:1}}
                    transition={{duration:1,color:{delay:2.8, duration:1.4},delay: 2}}>odo</motion.span>
            </Typography>
            <Typography
                component={motion.p}
                initial={{opacity:0,scale:1.5}}
                animate={{opacity:1, scale:1}} 
                transition={{duration:1,delay:2.5}}
                variant="body1">
                Whichever list is longer defines intensity of your adventure.
            </Typography>
        </motion.div>
    )
}

export default Splash;