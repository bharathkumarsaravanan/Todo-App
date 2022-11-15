import React from "react";
import {CChart} from '@coreui/react-chartjs';
import { useState, useEffect } from "react";

function Graph(props){


    const [labels, setLabels] = useState([])
    const [values, setValues] = useState([])
    var data = props.data;

    function sep(){
        if(labels.length===0){
        data.length!==0&&data.map((Item) => {
            setLabels(prev => [...prev, Item.App])
        })
        }

        if(values.length===0){
            data.length!==0&&data.map((Item) => {
                setValues(prev => [...prev, Item.completed])
            })
            }

    }

    sep();
    console.log(labels);
    console.log(values);
    

   

   
       
   
    



    return(
        <CChart
            className="chart"
            type={props.type}
            data={{
                labels: labels,
                datasets: [
                {
                    label: props.heading,
                    backgroundColor: props.bgColor,
                    data: values,
                },
                ],
            }}
            />
    )
}

export default Graph;