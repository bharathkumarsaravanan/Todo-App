import React from "react";
import { useState,useCallback,useEffect } from "react";
import Userrow from "./Userrow";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
function Users(){

    const [userData,setUserData] = useState()

    const usersGetFetch = () => {
        fetch('http://localhost:4000/users')
        .then(response => response.json())
        .then((user) => setUserData(user.users)) 
    }

    useEffect(() => {
        usersGetFetch();
    },[])

    console.log(userData)
    
    return(
        <TableContainer component={Paper}>
            <Typography variant="h3" gutterBottom>Users</Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>userId</TableCell>
                        <TableCell>User name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userData&&userData.map((user,index) => <Userrow columns= {user} key={user.id} id={user.id}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Users