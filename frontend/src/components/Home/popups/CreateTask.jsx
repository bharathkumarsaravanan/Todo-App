import React from "react";
import { TextField } from "@mui/material";
import {TextareaAutosize} from "@mui/material";
import {Button} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import {Select} from "@mui/material";
import {MenuItem} from "@mui/material";

function CreatePopup(props){

    const [values,setValues] = useState({title:'',description:'',projectId:''})
    const [menuItems,setMenuItems] = useState()

    var projectFetch = ()=> {
        return fetch('http://localhost:4000/tudos')
                .then(response => response.json())
                .then((data) => setMenuItems(data.tudos))
    }

    var CreatTaskFetch = useCallback((NewItem) =>{
        return fetch('http://localhost:4000/tudos',{
                method: "POST",
                body: JSON.stringify(NewItem),
                headers: {'Content-type': 'application/json; charset=UTF-8'}
                })
                .then(response => response.json())
                .then(result => console.log(result));
    })

    useEffect(() =>{
        projectFetch();
    },[])

    function Inputs(element){
        const {name,value} = element.target;

        setValues((prev) => {
            return{
                ...prev,
                [name] : value,
                projectId : props.project,
            }
        })
    }

    function InputValues(){

        CreatTaskFetch(values);
        console.log(values);
        props.Add(values);
        setValues({title:'',description:''})
        props.popup()
    }

    return(
        <div>
            {/* <TextField id="outlined-basic" label="Project Name" variant="outlined" defaultValue={props.project} onChange={Inputs} /><br /> */}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="projectId"
                value={props.project}
                label="Project Name"
                onChange={Inputs}
                >
                {menuItems&&menuItems.map((Item) => <MenuItem value={Item.id}>{Item.title}</MenuItem>)}

            </Select>
            <TextField id="outlined-basic" label="Task" variant="outlined" name="title" onChange={Inputs} value={values.title} /><br />
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Descriptions"
                minRows={6}
                style={{ width: 250 }}
                name="description"
                value={values.description}
                onChange={Inputs}
                />
            <Button variant="contained" onClick={InputValues}>Enter</Button>
        </div>
    )
}

export default CreatePopup;