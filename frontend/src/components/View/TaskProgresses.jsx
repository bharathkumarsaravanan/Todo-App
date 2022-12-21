import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'

function TaskProgresses(props){
    var {id} = useParams();
    const [records, setRecords] = useState([]);
    console.log(id);
    const dataFetch = () => {
        fetch('http://localhost:4000/progress/'+id+'/activities')
        .then(response => response.json())
        .then(data => setRecords(data.tasks))
    }
    useEffect(() => {
        dataFetch();
    },[])

    return(
        <Table sx={{ minWidth: 650 }} style={{backgroundColor:'#4e5055', marginTop:'5rem', position:'relative'}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="left" sx={{color: 'rgba(93, 167, 219, 1)'}}>DATE</TableCell>
                    <TableCell align="left" sx={{color: 'rgba(93, 167, 219, 1)'}}>TASK</TableCell>
                    <TableCell align="left" sx={{color: 'rgba(93, 167, 219, 1)'}}>STATUS</TableCell>
                    <TableCell align="left" sx={{color: 'rgba(93, 167, 219, 1)'}}>TIME</TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
          {records.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{color:'aliceblue',opacity: 0.7}}>
                {row.date}
              </TableCell>
              <TableCell align="left" sx={{color:'aliceblue',opacity: 0.7}}>{row.title}</TableCell>
              <TableCell align="left" sx={{color:'aliceblue',opacity: 0.7}}>{row.status=='todo'?'created':row.status}</TableCell>
              <TableCell align="left" sx={{color:'aliceblue',opacity: 0.7}}>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}

export default TaskProgresses;