import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Outlet } from "react-router-dom";
import '../../style.css';


function Header(props){
    var head = props.title!==undefined?props.title.split(/[ ]+/):['']
    var homePath = `home/overview`
    var progressPath = `progress`
    return(
        <div>
            <div style={{backgroundColor:'#5da7db',height:'10px',width:'100%',position:'absolute',top:'0',right:'0',left:'0'}}></div>
            <div className="viewHeader">
                <h1 className="viewHeadTitle">{head[0]}<span style={{color:'white',fontWeight:'bold'}}>App</span></h1>
                <div className='viewHeaderLinks'>
                    <Link to={homePath} style={{color:'#7f8487'}}>Home</Link>
                     / 
                     <Link to={progressPath} style={{color:'#7f8487'}}>Progress</Link>
                </div>
                <input type='text' className='viewHeaderSearch' placeholder="Search"></input>
            </div>
            <Outlet />
        </div> 
    )
}

export default Header;