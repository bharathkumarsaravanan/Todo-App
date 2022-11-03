import React from "react";
import { useCallback,useState,useEffect } from "react";
// import GetRequest from "./fetch";
import Rows from "./Rows"
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import {motion} from "framer-motion";



function Projects(){

    const [lists, setlists] = useState([]);

    const Request =  () => {
        return fetch('http://localhost:4000')
               .then((response) => response.json())
               .then((data) => setlists(data.tudoItems))
    }

    useEffect(() => {
        Request();
    },[])

    function createItem(){
        window.location.href = "/create"
    }

    return(
        <div>
        <Button variant="contained" style={{position:'absolute',left:'10rem'}} color="info" onClick={createItem}>Create</Button>  
                  
        {/* <TableContainer 
            className= "tableContainer"
            component={motion.div}
            animate={{opacity:1}}
            initial={{opacity:0}}
            transition={{duration:1}}> */}
            <Table sx={{ minWidth: 650 }} className= "tableContainer"  style={{width:'60%'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>no</TableCell>
                        <TableCell>App name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lists.map((list,index) => <Rows columns= {list} index={index} key={index} delay={index} />)}
                </TableBody>
            </Table>
        {/* </TableContainer> */}
        </div>
    )
}


export default Projects;
