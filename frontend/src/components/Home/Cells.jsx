import React from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from "@mui/material";



function Cells(props){

    console.log(props.projects)

    var link = '#'

    

    return(
        <TableRow style={{display:props.visible?'block':'none',transition:'1s ease in out'}}>
        
            {props.projects && props.projects.map((project,index) => <TableCell key={project.id + '-' + index}><Link href={props.projects&&'/show/'+props.projects[0].projectid} underline="none">{project.title}</Link></TableCell>)}
            
        </TableRow>
    )
}

export default Cells;