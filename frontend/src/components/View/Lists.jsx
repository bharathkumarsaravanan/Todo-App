import React from "react";
import { Link } from "react-router-dom";

function Lists(props){

    var overviewPath = `/show/${props.id}/home/overview`
    var taskPath = `/show/${props.id}/home/tasks`

    return(
        
        <div className="viewList">
            <Link to={overviewPath}>Overview</Link><br/>
            <Link to={taskPath}>Packages</Link><br/>
            <Link>Tasks</Link><br/>
            <Link>Features</Link><br/>
            <Link>GitHub</Link><br/>
        </div>
    )

}

export default Lists;