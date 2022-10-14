import React from "react";
import { useCallback,useState,useEffect } from "react";
import Projects from "./Projects";
import Users from "./Users";
import Button from '@mui/material/Button'
function App(){

    const [Component,setComponent] = useState({Tab: Projects})
 
 
    return(
        <div>
            <div style={{display: 'flex',width:'100%',alignItems:'center',justifyContent:'center',gap:'10px'}}>
                <Button variant={Component.Tab===Projects?"contained":"outlined"}  onClick={() =>  setComponent({Tab: Projects})}>Projects</Button>
                <Button variant={Component.Tab===Users?"contained":"outlined"}   onClick={() =>  setComponent({Tab: Users})}>Users</Button>
            </div>

                <Component.Tab />
        </div>
    )
}



export default App;