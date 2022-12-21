import React from "react";
import { Typography } from "@mui/material";
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {Button} from "@mui/material";
import {CardActions} from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { useAnimation } from "framer-motion";


function ProjectBox(props){
    const [data, setData] = useState();
    const animation = useAnimation();

    const dataFetch = () => {
        fetch('http://localhost:4000/progress/project/'+props.id)
        .then(response => response.json())
        .then(data => setData(data.data))
    }
    useEffect(() => {
        dataFetch();
    },[])
    useEffect(() => {
        if(props.view){
            animation.start({
                scale: 1,
                transition: {
                     duration: .7, type: 'spring', bounce: .3, delay: props.delayVal&&props.delayVal * 0.1
                }
            });
        }
        if(!props.view){
            animation.start({scale: 0})
        }
        
        console.log('View',props.view)
    },[props.view])
    // if(data.data.length==0) return null
    return(
        <Card
        //  style={{transition:'500ms ease-in-out'}}
         animate={animation}
         component={motion.div}
         sx={{ width: 200, height:210, bgcolor:"#73777B", color:'white','&:hover':{
            scale: '1.1'
        } }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, color:'#4e5055' }} gutterBottom>
                    Report
                </Typography>
                <Typography sx={{color: 'rgba(93, 167, 219, 1)', fontWeight: 700}} variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2">
                   <span style={{fontSize:'30px', color:'aliceblue'}}>&#9632;  </span>
                      working on {data&&data.length} {data&&data.length > 1?'days':'day'}
                </Typography>
            </CardContent>
            <CardActions style={{position:'absolute', bottom:'10px'}}>
                <Link to={'/show/'+props.id+'/activities'} style={{textDecoration:'none'}}><Button size="small" sx={{color:'aliceblue'}}>Learn More</Button></Link>
            </CardActions>
      </Card>
    )
}
export default ProjectBox;