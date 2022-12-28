import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

function Tiles(props){
    
    const {ref, inView} = useInView();
    const animation = useAnimation();
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        console.log(inView)
        if(inView){
            animation.start({
                y:0,
                transition: {
                    duration: 1.2, delay:.5
                }
            })
        }
        if(!inView&&firstRender){
            animation.start({y:600})
            setFirstRender(false)
        }
    },[inView])

    return(
        <div ref={ref}>
            <motion.div 
                animate={animation}
                style={{width:'fit-content', textAlign:'center'}} >
                <img 
                    className="projectTile"
                    src={"http://localhost:4000/images/features/"+props.img} />
                <Typography variant="h5">{props.title}</Typography>
            </motion.div>
        </div>
    )

}

export default Tiles;