import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Typography } from "@mui/material";
import { CChart } from "@coreui/react-chartjs";
import ProjCount from "./ProjCount";
import { motion } from "framer-motion";



function LastMonthProgress(props){
    const [label, setLabel] = useState([]);
    const [tenDaysProg, setTenDaysProg] = useState([]);
    const [compCount, setCompCount] = useState([]);
    const [projTaskCount, setProjTaskCount] = useState([]);
    const [state, setState] = useState(false);
    const graphDataFetch = () => {
        return fetch('http://localhost:4000/progress/lasttendays')
                .then(response => response.json())
                .then(graphData =>{ 
                    setTenDaysProg(graphData);  
                    setState(true)
                })
    }
   
    useEffect(() => {
        graphDataFetch();
    },[])
    if(tenDaysProg.length !== 0&&state){            
        setLabel(tenDaysProg.todo.map((data) => data.date));
        setCompCount(tenDaysProg.todo.map((data) => data.count));
        setState(false);
    }
    return(
        <div style={{marginTop:'2rem'}}>
            <Typography 
                component={motion.div}
                animate={{ opacity:[0,1]}}
                transition={{duration: 1, type: 'spring', bounce: .5, delay:1}}
                variant="h3" 
                className="progConHeader">Last 10days</Typography>
            <div style={{display:'flex', gap:'12rem',padding:'1.5rem', marginTop:'2rem'}}> 
                <CChart
                    style={{ width:'50%', marginTop:'-1rem'}}
                    type="line" 
                    data={{
                        labels: label,
                        datasets: [
                        {
                            label: "Completed Tasks",
                            backgroundColor: "rgba(151, 187, 205, 0.2)",
                            borderColor: "rgba(151, 187, 205, 1)",
                            pointBackgroundColor: "rgba(151, 187, 205, 1)",
                            pointBorderColor: "#fff",
                            data: compCount
                        },
                        ],
                    }}
                    />
                <ProjCount title='projects' data={tenDaysProg.taskCount} countHead='Tasks' bg='#423F3E' clr='aliceblue' />
            </div>
        </div>
    )
}
export default LastMonthProgress;