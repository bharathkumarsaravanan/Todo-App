import React from "react";
import { useState,useEffect } from "react";
import Graph from "./graph";

function Progress(){

    const [graphData, setGraphData] = useState({App:'',completed:''})
    const graphDataFetch = () => {
        return fetch('http://localhost:4000/progress')
                .then(response => response.json())
                .then(graphData => setGraphData(graphData.graphData))
    }
    useEffect(() => {
        graphDataFetch();
    },[])

    return (
        <div>
            <Graph type='bar' bgColor='#5DA7DB' data={graphData} />
        </div>
    )

}

export default Progress;