import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectCount from "../Home/ProgressPage/ProjCount";
import { CChart } from "@coreui/react-chartjs";
import { Typography } from "@mui/material";

function ProgressReport(props){
    const [workDays, setWorkDays] = useState([]);
    const [state, setState] = useState(true);
    const [label, setlabel] = useState();
    const [datas, setDatas] = useState();
    var {id} = useParams()
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
            {workDays.length!==0&&workDays.data.length!==0&&
            <Typography variant="h7" color="white" fontWeight="500" style={{position:'absolute', right:'1rem', top:'-9rem', backgroundColor:'#4e5055', padding:'.8rem', borderRadius:'.5rem'}}>
                since {workDays.length!==0&&workDays.data[0].projectDate}
            </Typography>}
            <div style={{display:'flex', gap:'10rem', marginTop:'2rem', marginLeft:'10rem', position: 'relative'}}>
                <ProjectCount title='Date' countHead='Activities on tasks' data={workDays.data} bg='#73777B' clr='white'/>
                <CChart
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
                    />

            </div>
        </div>
    )
}
export default ProgressReport