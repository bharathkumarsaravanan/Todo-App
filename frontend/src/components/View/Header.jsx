import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { Outlet } from "react-router-dom";
import '../../style.css';


function Header(props){
    const [selected, setSelected] = useState('Home')
    var head = props.title!==undefined?props.title.split(/[ ]+/):['']
    return(
        <div >
            <div style={{backgroundColor:'#5da7db',height:'10px',width:'100%',position:'fixed',top:'0',right:'0',left:'0'}}></div>
            <div className="viewHeader">
                <h1 className="viewHeadTitle">{head[0]}<span style={{color:'white',fontWeight:'bold'}}>App</span></h1>
                <div className='viewHeaderLinks'>
                    <Link to='home/overview' 
                        style={{color:'#7f8487', textDecoration:selected!=='Home'&&'none'}}
                        onClick={() => setSelected('Home')}>Home  </Link>
                      /  
                     <Link to='progress' 
                        style={{color:'#7f8487', textDecoration:selected!=='Progress'&&'none'}}
                        onClick={() => setSelected('Progress')}>  Progress</Link>
                </div>
                <input type='text' className='viewHeaderSearch' placeholder="Search"></input>
            </div>
        </div> 
    )
}

export default Header;