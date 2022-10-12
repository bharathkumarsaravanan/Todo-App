import React from "react";
import { useCallback,useState,useEffect } from "react";
// import GetRequest from "./fetch";
import TableRow from "./tableRow"
import { Link } from "react-router-dom";


function Projects(){

    const [lists, setlists] = useState([]);

    const Request =  () => {
        return fetch('http://localhost:4000')
               .then((response) => response.json())
               .then((data) => setlists(data.tudoItems))
    }

    useEffect(() => {
        Request();
    },[])

    function createItem(){
        window.location.href = "/create"
    }

    return(
        <div>
            <button onClick={createItem}>Create</button>            
            <table>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>App name</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {lists.map((list,index) => <TableRow columns= {list} key={index}/>)}
                </tbody>
            </table>
        </div>
    )
}


export default Projects;
