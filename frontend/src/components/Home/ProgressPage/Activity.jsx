import React from "react";
import { useState,  useEffect } from "react";
import { Typography } from "@mui/material";
import ProjCount from "./ProjCount";
import { CChart } from "@coreui/react-chartjs";

function Activity(){
    const [featureCount, setFeatureCount] = useState([]);
    const [taskCount, setTaskCount] = useState([]);
    const [labels, setLabels] = useState([]);
    const [counts, setCounts] = useState([]);
    const [ranClr, setRanClr] = useState(['#73777B'])
    const [state, setState] = useState(false)
    const featureCountFetch = () => {
        fetch('http://localhost:4000/progress/activities')
        .then(response => response.json())
        .then(data =>{
            setFeatureCount(data.featureCount);
            setTaskCount(data.taskCount)
            setState(true)
        }) 
    };

    useEffect(() => {
        featureCountFetch();
    },[])

    if(featureCount.length !==0 && state){
        setLabels(taskCount.map((item) => item.title))
        setCounts(taskCount.map((item) => item.count))
        taskCount.map((Item) => {
            let maxVal = 0xFFFFFF;
            let randomNum = Math.random() * maxVal;
            randomNum = Math.floor(randomNum);
            randomNum = randomNum.toString(16);
            setRanClr(prev => {
                return[
                    ...prev,
                    ['#'+ randomNum.padStart(6,0)]
                ]
            }) 
        })
      
        setState(false);
    }

    return(
        <div className="progressElements">
            <Typography variant='h3' className="progConHeader">Activities</Typography>
            <div className="progressFlex">
                <ProjCount title='projects' data={featureCount} countHead='Overall Features' bg='white' clr='black' />
                <CChart
                    type="polarArea"
                    style={{width: '30rem', marginTop:'-3rem'}}
                    data={{
                        labels: labels,
                        datasets: [
                        {
                            data: counts,
                            backgroundColor: ranClr,
                        },
                        ],
                    }}
                    />
            </div>
        </div>
    )
}
export default Activity;