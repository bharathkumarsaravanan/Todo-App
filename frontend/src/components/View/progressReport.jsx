import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectCount from "../Home/ProgressPage/ProjCount";
import { CChart } from "@coreui/react-chartjs";
import { motion } from "framer-motion";

function ProgressReport(){
    const [workDays, setWorkDays] = useState([]);
    const [state, setState] = useState(true);
    const [label, setlabel] = useState();
    const [datas, setDatas] = useState();
    var {id} = useParams();

    var options = {
        animation: {
            delay: 3,
        },
    }

    const dataFetch = () => {
        fetch('http://localhost:4000/progress/project/'+id)
        .then(response => response.json())
        .then(data => setWorkDays(data))
    }

    useEffect(() => {
        dataFetch();
    },[])

    if(workDays.length !== 0&&state){
        setlabel(workDays.tasksCount.map(Item => Item.status))
        setDatas(workDays.tasksCount.map(Item => Item.count))
        setState(false);
    }

    return(
        <div>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'2rem', marginLeft:'10rem', width: '70vw'}}>
                <ProjectCount title='Date' countHead='Activities on tasks' data={workDays.data} bg='#73777B' clr='white'/>
                <CChart
                    component={motion.div}
                    type="doughnut"
                    style={{width:'20rem', marginTop:'-2rem'}}
                    data={{
                        labels: !label?['Loading..']:label,
                        datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651'],
                            data: !datas?[1,1]:datas,
                        },
                        ],
                    }}
                    options={options}
                    
                    />
            </div>
        </div>
    )
}
export default ProgressReport