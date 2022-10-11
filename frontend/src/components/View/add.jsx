import React from "react";
import { useState,useEffect,useCallback } from "react";
import { useParams } from "react-router-dom";
import Select from "./select";

function Add(){

    const [selectItems,setSelectitems] = useState({})
    const [newTools,setNewTools] = useState({})
    var {id} = useParams();

    const selectFetch = () => {
        fetch(`http://localhost:4000/view/${id}/add`)
        .then((response) => response.json())
        .then((data) => setSelectitems(data)); 
    }

    const AddToolsFetch = useCallback(() => {
        fetch( `http://localhost:4000/view/${id}/add`,{
            method: 'POST',
            body: JSON.stringify(newTools),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then((result) => console.log(result))
    })

    useEffect(() => {
        selectFetch();
    },[])
    // console.log(selectItems)
    var frontend = selectItems.frontend
    var backend = selectItems.backend
    var database = selectItems.database
    console.log(frontend)

    function btnClick(){
               console.log(newTools)
               AddToolsFetch();
    }

   

    function select(atr){
        var {name,value} = atr.target;

        setNewTools((prev) =>{
            return{
                ...prev,
                [name]: value
            }
        })
        
    }

    return(
        <div>
            {frontend &&<Select Items={frontend} Boxname='frontend'  selectValue={select} />}
            {backend &&<Select Items={backend} Boxname='backend'  selectValue={select} />}
            {database &&<Select Items={database} Boxname='database'  selectValue={select} />}
            <button onClick={btnClick}>submit</button>
        </div>
    )
}

export default Add;