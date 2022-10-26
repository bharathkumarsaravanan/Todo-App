import React from "react";
import { useCallback,useState,useEffect } from "react";
import Projects from "./Projects";
import Users from "./Users";
import Container from "./projectContainer"
import Button from '@mui/material/Button';
import {motion} from 'framer-motion'
function App(){

    const [Component,setComponent] = useState({Tab: Container})
 
 
    return(
        <motion.div>
            <div style={{display: 'flex',width:'100%',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                <Button 
                    variant={Component.Tab===Container?"contained":"outlined"}
                    component={motion.button}
                    initial={{scale:2,opacity:0}}
                    animate={{scale:1,opacity:1}}
                    transition={{duration:0.4}}   
                    onClick={() =>  setComponent({Tab: Container})}>
                    Todos
                    </Button> 
                <Button 
                    variant={Component.Tab===Projects?"contained":"outlined"}
                    component={motion.button}
                    initial={{scale:2,opacity:0}}
                    animate={{scale:1,opacity:1}}
                    transition={{delay:0.2,duration:0.4}}   
                    onClick={() =>  setComponent({Tab: Projects})}>Projects</Button>
                <Button 
                    variant={Component.Tab===Users?"contained":"outlined"}   
                    component={motion.button}
                    initial={{scale:2,opacity:0}}
                    animate={{scale:1,opacity:1}}
                    transition={{delay:0.4,duration:0.4}} 
                    onClick={() =>  setComponent({Tab: Users})}>Users</Button>
            </div>
            <div>
                <Component.Tab />
            </div>
        </motion.div>
    )
}



export default App;