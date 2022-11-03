import React from "react";
import {CChart} from '@coreui/react-chartjs';
import { useState } from "react";

function Graph(props){

    console.log(props.data)

    var color = props.bgColor;
    const [labels, setLabels] = useState([])
    var data = props.data;


       
   
    



    return(
        <CChart
            type={props.type}
            data={{
                labels: ['xsmm','xmlsa'],
                datasets: [
                {
                    label: "progress",
                    backgroundColor: 'blue',
                    data: [2,5],
                },
                ],
            }}
            />
    )
}

export default Graph;