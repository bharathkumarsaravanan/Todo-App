import React from "react";
import { NavLink } from "react-router-dom";

function Lists(){

    return(       
        <div className="viewList">
                <NavLink to='overview'>Overview</NavLink>
                <NavLink to='packages'>Packages</NavLink>
                <NavLink to='taskItems'>Works</NavLink>
                <NavLink to='features'>Features</NavLink>
                <NavLink to='links'>Links</NavLink>
        </div>
    )

}

export default Lists;