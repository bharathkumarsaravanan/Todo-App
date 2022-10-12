import React from "react";
import { useCallback,useState,useEffect } from "react";
// import GetRequest from "./fetch";
import TableRow from "./tableRow"
import { Link } from "react-router-dom";
import Projects from "./Projects";
import Button from '@mui/material/Button'
function App(){

    // const [Component,setComponent] = useState('Projects')

    var Component = Projects;

    function tabWindow(props){
        console.log(props.target.name)
        Component = props.target.name;
        console.log(Component);
    }
 
    return(
        <div>
            <Button variant="outlined" name='Projects' onClick={tabWindow}>Projects</Button>
            <Button variant="outlined" name='Users' onClick={tabWindow}>Users</Button>
            <Component/>
        </div>
    )
}



export default App;