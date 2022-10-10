import React from "react";
import { useState, useEffect } from "react";
import Table from "./table";
import CreatePopUp from "./CreatePopUp";
// import Get from './fetch';

function App(){
    var [popUp, setpopUp] = useState(false);
    var [elements, setelements] = useState([]);
    var [editItem, setEditItem] = useState({});

    const testFetch = () => {
        return fetch('http://localhost:4000')
                .then((response) => response.json())
                .then((datas) => setelements(datas.tudoItems))
    }
    

    useEffect(() => {
        testFetch()
     },[])


    function DeleteElement(indexValue){
        setelements((prevElements) => {
            return elements.filter((prevElements,index) => {
                return index !== indexValue;
            })
        })

    }

    function EditElement(EditIndex){
            console.log(EditIndex);
            CreateElement();
            setEditItem(() =>{
                return elements.filter((prev,index)=> {
                    return index === EditIndex
                } )
    })
    }

    function CreateElement(){
            console.log(popUp)
            setpopUp((prev) => !prev);
    }

    function Addelement(newItem){
        console.log(elements)
        setelements((prev)=> {
            return [...prev,newItem]
        })
    }

    
    return(
        <div>
        <button onClick={CreateElement}>Create</button>
        <table>
        <thead>
            <tr>
                {/* <th>Id</th> */}
                <th>userid</th>
                <th>Title</th>
                <th>status</th>
            </tr>
        </thead>
        <tbody>
           {elements.map((data,index) => <Table 
                                key = {index}
                                indexValue = {index}
                                user= {data.userId} 
                                id = {data.id} 
                                heading = {data.title} 
                                status = {data.completed?"completed":"not completed"} 
                                removeItem = {DeleteElement}
                                editItem = {EditElement}
                                /> )} 
        </tbody>
        </table>
        <CreatePopUp Add={Addelement} EditItem={editItem} visible={popUp} PopUp={CreateElement} />
        </div>

    )
}

export default App;
