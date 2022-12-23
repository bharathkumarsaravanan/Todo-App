import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import { useState, useEffect, useCallback } from "react";

function Login(){
    const [cred, setCred] = useState({email:'', password:''});
    const [show, setShow] = useState(false);

    useEffect(() => {
        localStorage.setItem('login',false)
    },[])

    const loginFetch = useCallback(() => {
        fetch('http://localhost:4000/login',{
            method: 'POST',
            body: JSON.stringify(cred),
            headers: {
             'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data)
            if(data.data.length !==0){
                localStorage.setItem('login', true);
                window.location.href ='/index/home'
            }
        })
        
    })
    
    function getValue(val){
        var {name, value} = val.target;
        setCred(prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    }

    function enterValue(){
        console.log(cred);
        loginFetch();
    }
    
    return(
        <div className="login">
            <div className="loginBox">
                <Typography variant="h2">Login</Typography><br/><br/>
                <TextField 
                    variant="outlined" 
                    label="Email" 
                    name="email"
                    type="email"
                    value={cred.email}
                    onChange={getValue}
                    />
                <TextField 
                    variant="outlined" 
                    label="Password" 
                    name="password"
                    type={!show?"password":"text"}
                    value={cred.password}
                    onChange={getValue}
                    ></TextField>
                <Button onClick={() => setShow(prev => !prev)}>{!show?'SHOW':'HIDE'}</Button>
                    <br/>
                <Button 
                    variant="contained" 
                    size="large"
                    onClick={enterValue}>Login</Button>
            </div>
        </div>

    )
}

export default Login;