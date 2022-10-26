import React from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import {motion} from "framer-motion";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Options from "./popups/options";



function Rows(listItem){

    const deleteFetch = useCallback((deleteId) => {
        return(fetch('http://localhost:4000/delete',{
                    method: 'POST',
                    body: JSON.stringify(deleteId),
                    headers: {
                     'Content-type': 'application/json; charset=UTF-8',
                    }
                })
                .then((response) => response.json())
                .then((result) => console.log(result))
            )},[])

    function DeleteItem(){
        console.log(listItem.columns.id);
        var id = {id: listItem.columns.id}

        deleteFetch(id);
    }

    const path = `/edit/${listItem.columns.id}`;
    const showPath = `/show/${listItem.columns.id}`;

    return(
        <TableRow component={motion.row} animate={{x: 0,opacity:1}} initial={{x: -200,opacity:0}} transition={{duration:1,delay:listItem.delay!==0?listItem.delay*0.2:0}}>
            <TableCell>{listItem.delay + 1}</TableCell>
            <TableCell>{listItem.columns.title}</TableCell>
            {/* <TableCell>{listItem.columns.completed? 'completed':'not completed'}</TableCell> */}
            <TableCell>
                <MoreVertIcon  />
                {/* <Options /> */}
            </TableCell>
            <TableCell><Button variant="outlined" color="error"  onClick={DeleteItem}>Delete</Button></TableCell>
            <TableCell><Link to= {path} ><Button variant="contained" color="success">Edit</Button></Link></TableCell>
            <TableCell><Link to= {showPath}><Button variant="contained" color="info">View</Button></Link></TableCell>
        </TableRow>
    )
}

export default Rows;