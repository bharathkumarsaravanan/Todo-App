import React from "react";
import { useState } from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function Userrow(userData){

    const [visible,setVisible] = useState(false)

    function Showprojects(){
        setVisible(!visible)
    }
     

    return([
        <TableRow onClick={Showprojects}>
            <TableCell>{userData.columns.id}</TableCell>
            <TableCell>{userData.columns.name}</TableCell>
        </TableRow>,
        <TableRow style={{display:visible?'block':'none',transition:'1s ease in out'}}>
            <TableCell colSpan={1}>{userData.columns.title}</TableCell>
        </TableRow>
    ])
}


export default Userrow;