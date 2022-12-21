import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { motion } from "framer-motion";

function ProjCount(props){
    console.log(props.data);
    return(
    <motion.div 
        animate={{scale:[0,1.1,1]}}
        transition={{duration:.7, type: 'spring'}}
        className="countTable" 
        style={{backgroundColor: props.bg}}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table" >
            <TableHead >
                <TableRow >
                    <TableCell style={{color:props.clr, fontWeight:'700'}}>{props.title}</TableCell>
                    <TableCell style={{color:props.clr, fontWeight:'700'}}>{props.countHead}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data&&props.data.map((task, index) => {
                    return <TableRow key={index}>
                        <TableCell style={{color:'rgba(93, 167, 219, 1)'}}>{task.title}</TableCell>
                        <TableCell style={{color:props.clr}}>{task.count}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </motion.div>
    )
}
export default ProjCount;