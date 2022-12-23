import React from "react";
import { useState,useEffect } from "react";
import ProgressContainer from "./progressContainer";
import {Typography} from "@mui/material"
import {Link} from "react-router-dom"
import LastMonthProgress from "./lastMonthProgress";
import Activity from "./Activity";
import ProjectProgress from "./projprogressContainer";

function Progress(){
    const [todayProgress, setTodayProgress] = useState({});
  
    const todayDataFetch = () => {
        fetch('http://localhost:4000/progress/today')
        .then(response => response.json())
        .then(data => setTodayProgress(data))
    } 
    useEffect(() => {
        setInterval(todayDataFetch(),1000);
    },[])
    var newTaskCount = 0;
    var completedCount = 0;
    todayProgress.todayProgress&&todayProgress.todayProgress.map((value) => {
        if(value.status === 'completed'){
            completedCount = value.count
        }else{
            newTaskCount = value.count
        }
    })
  
    return (
     
        <div className='progressPage'>
            <ProgressContainer total={todayProgress.totalCount} 
                               completed={completedCount}
                               new={newTaskCount} />
             <LastMonthProgress />
            <Activity />
            <ProjectProgress /> 
        
            
        </div>
    )

}

export default Progress;