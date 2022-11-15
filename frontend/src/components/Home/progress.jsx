import React from "react";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import Graph from "./graph";

function Progress(){

    const [completed, setCompleted] = useState([])
    const [pending, setPending] = useState([])
    const graphDataFetch = () => {
        return fetch('http://localhost:4000/progress')
                .then(response => response.json())
                .then(graphData =>{ 
                    setCompleted(graphData.completed)
                    setPending(graphData.pending)
                })
    }
    useEffect(() => {
        graphDataFetch();
    },[])

    return (
        <div >
        <div className="progressPage">
            <Graph type='bar' bgColor='#5DA7DB' data={completed} heading='Completion progress' />
            <Graph type='polarArea' 
                    bgColor={['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB']} 
                    data={pending} 
                    heading='pending progress' />
        </div>
        </div>
    )

}

export default Progress;