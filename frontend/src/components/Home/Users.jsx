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
            <h1>Users</h1>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>userId</TableCell>
                        <TableCell>User name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userData&&userData.map((user,index) => <Userrow columns= {user} key={index}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Users