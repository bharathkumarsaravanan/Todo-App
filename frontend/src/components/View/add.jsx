import React from "react";
import { useState,useEffect,useCallback } from "react";
import { useParams } from "react-router-dom";
import Select from "./select";

function Add(props){

    const [selectItems,setSelectitems] = useState({})
    const [newTools,setNewTools] = useState({})

    const selectFetch = () => {
        fetch(`http://localhost:4000/view/${props.id}/add`)
        .then((response) => response.json())
        .then((data) => setSelectitems(data)); 
    }

   

    useEffect(() => {
        selectFetch();
    },[])
    var frontend = selectItems.frontend
    var backend = selectItems.backend
    var database = selectItems.database
    console.log(frontend)

    function btnClick(){
               console.log(newTools)
               props.postFetch(newTools)
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

    var selected ;

    if(props.selected){
       selected = props.selected 
    //    console.log(selected)
    }else{
        selected = false;
    }
    var a = props.default;

    return(
        <div>
            {frontend &&<Select Items={frontend} Boxname='frontend'  selectValue={select} default={props.default} selected={selected?selected.frontend:selected}  />}
            {backend &&<Select Items={backend} Boxname='backend'  selectValue={select} default={props.default} selected={selected?selected.backend:selected} />}
            {database &&<Select Items={database} Boxname='database'  selectValue={select} default={props.default} selected={selected?selected.database:selected}  />}
            <button onClick={btnClick}>submit</button>
        </div>
    )
}

export default Add;