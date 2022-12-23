import React from "react";
import { Link, NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../../style.css';


function Header(props){
    var head = props.title!==undefined?props.title.split(/[ ]+/):['']
    return(
        <div >
            <div style={{backgroundColor:'#5da7db',height:'10px',width:'100%'}}></div>
            <div className="viewHeader">
                <Link to='/index/projects' style={{color:'white',position:'absolute',left:'.8rem',top:'.5rem'}}><ArrowBackIcon fontSize="large"/></Link>    
                <h1 className="viewHeadTitle">{head[0]}<span style={{color:'white',fontWeight:'bold'}}>App</span></h1>
                <div className='viewHeaderLinks'>
                    <NavLink to='home/overview'>Home  </NavLink>
                       <span style={{color:'gray', fontSize:'20px'}}>/</span>
                     <NavLink to='activities'>  Activities</NavLink>
                </div>
                <input type='text' className='viewHeaderSearch' placeholder="Search"></input>
            </div>
        </div> 
    )
}

export default Header;