import React from "react";
import { Typography } from "@mui/material";
import TaskItem from "./taskItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";


function Tasks(){
    
    const [tasks, setTasks] = useState([{}]);
    const [completed, setcompleted] = useState([{}]);
    const {id} = useParams();
    const tasksFetch = () => {
        return fetch('http://localhost:4000/tudos/'+id)
                .then(response => response.json())
                .then((task) => {
                    setTasks(task.tasks)
                    setcompleted(task.completed)
                })
    };

    useEffect(() => {
        tasksFetch();
    },[]);

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.5}}
            exit={{opacity: 0,transition:{duration:.5}}}  
            className="viewTasksComponent">

            <div>
                <Typography variant= 'h3' >Works done</Typography>
                <div className="viewWorkContainer">
                    {tasks&&tasks.map((task, index) => <TaskItem key={index} title={task.title} description={task.description} />)}     
                </div>           
            </div><br />

            <div>
                <Typography variant= 'h3'>Pending Works</Typography>
                <div className="viewWorkContainer">
                        {completed&&completed.map((task, index) => <TaskItem key={index} title={task.title} description={task.description} />)}     
                </div>
            </div>

        </motion.div>
    )

}

export default Tasks;