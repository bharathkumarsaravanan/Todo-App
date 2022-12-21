import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Lists(){

    return(       
        <div className="viewList">
                <NavLink to='overview'>Overview</NavLink><br/>
                <NavLink to='packages'>Packages</NavLink><br/>
                <NavLink to='taskItems'>Works</NavLink><br/>
                <NavLink to='features'>Features</NavLink><br/>
                <NavLink to='links'>Links</NavLink>
        </div>
    )

}

export default Lists;