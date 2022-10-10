import React from "react";
import { useCallback,useState,useEffect } from "react";
// import GetRequest from "./fetch";
import TableRow from "./tableRow"



function App(){

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
                 {lists.map((list,index) => <TableRow columns= {list} key={index}/>)}
            </table>
        </div>
    )
}

export default App;