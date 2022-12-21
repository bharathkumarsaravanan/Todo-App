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
    var today = new Date();
    var date = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var year = today.getFullYear();
    var day = year + '-' + month+ '-' + date
    return (
     
        <div className='progressPage'>
            <div className="dateContainer">
                <Typography style={{color:'rgba(93, 167, 219, 1)', fontWeight:'700'}}>{day}</Typography> 
            </div>
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