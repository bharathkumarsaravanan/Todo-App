import React from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
function Progress(){
    return(
        <a href={'https://github.com/bharathkumarsaravanan/Todo-App'} target='_blank'>
            <motion.img 
                animate={{scale:[0,1.3,1]}}
                transition={{duration:0.6, delay:1}}
                style={{width:'20rem', marginTop:'4rem'}}
                src={require('../../stocks/Icons/git.png')} />
        </a>
    )
}

export default Progress;