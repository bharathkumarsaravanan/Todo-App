import React from "react";
import { useState,useEffect } from "react";
import ProgressContainer from "./progressContainer";
import { motion } from "framer-motion";
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
        <motion.div 
            initial={{x: '-100%'}}
            animate={{x: '0'}}
            transition={{duration:1, delay:.3}}
            exit={{x: window.innerWidth,transition:{duration:.8}}}
            className='progressPage'>
            <ProgressContainer total={todayProgress.totalCount} 
                               completed={completedCount}
                               new={newTaskCount} />
             <LastMonthProgress />
            <Activity />
            <ProjectProgress /> 
        
            
        </motion.div>
    )

}

export default Progress;