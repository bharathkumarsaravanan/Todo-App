import React from "react";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {motion} from "framer-motion";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Rows(listItem){

    function DeleteItem(){
        listItem.remove(listItem.columns.id);
    }

    return(
        <TableRow 
            onClick={() => window.location.href= `/show/${listItem.columns.id}/home/overview`}
            component={motion.row} 
            animate={{x: [-200,0],opacity:[0,1]}} 
            transition={{duration:1,delay:listItem.delay!==0?listItem.delay*0.2:0}}>            
            <TableCell>{listItem.delay + 1}</TableCell>
            <TableCell>{listItem.columns.title}</TableCell>
            <TableCell>
                <DeleteOutlineIcon
                    onClick={DeleteItem}  />
            </TableCell>
        </TableRow>
    )
}

export default Rows;