import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Lists(props){

    var overviewPath = `overview`
    var packagePath = `packages`
    var taskPath = `taskItems`
    var featurePath = `features`
    var gitPath = `github`
    var aboutPath = `about`

    return(
        
        <div className="viewList">
            <nav>
            <Link to={overviewPath}>Overview</Link><br/>
            <Link to={packagePath}>Packages</Link><br/>
            <Link to={taskPath}>Tasks</Link><br/>
            <Link to={featurePath}>Features</Link><br/>
            <Link to={gitPath}>GitHub</Link><br/>
            <Link to={aboutPath}>about</Link><br/>
            </nav>
        </div>
    )

}

export default Lists;