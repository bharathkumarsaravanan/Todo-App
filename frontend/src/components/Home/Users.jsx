import React from "react";
import { useState,useCallback,useEffect } from "react";

function Users(){

    const [users,setUsers] = useState({})

    const usersGetFetch = () => {
        fetch('http://localhost:4000/users')
        .then(response => response.json())
        .then((userData) => setUsers(userData)) 
    }

    useEffect(() => {
        usersGetFetch();
    },[])

    return(
        <div>

        </div>
    )
}

export default Users