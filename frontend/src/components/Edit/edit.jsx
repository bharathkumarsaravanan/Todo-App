import React from "react";
import { useState,useCallback,useEffect } from "react";
import { useParams } from "react-router-dom";
import Select from "../View/select";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


function Edit(){

    const [element,setElement] = useState();
    const [users,setUsers] = useState()

    var {id} = useParams();
    // console.log(id);
    // console.log(element)


    const EditGetFetch = () => {
        return fetch('http://localhost:4000/edit/'+id)
               .then((response) => response.json())
               .then((data) => {
                setElement(data.Editdata[0])
                setUsers(data.users)
                });
    }

    const EditPostFetch = useCallback((Item) => {
        return fetch('http://localhost:4000/edit/'+id,{
                    method: 'POST',
                    body: JSON.stringify(Item),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                })
                .then((response) => response.json())
                .then((result) => console.log(result))
    })

    useEffect(() => {
        EditGetFetch();
    },[])

    function InputElement(props){
       
    }

  

    function select(atr){
        var {name,value,checked} = atr.target;
        setElement((prev) => {
            return{
                ...prev,
                [name] : name=='completed'?checked:value,
            }
        })
        
    }

    function createNew(){
        EditPostFetch(element);
        console.log(element)
    }

    var selected ;
    var checked = false;

    if(element){
       selected = element.userId;
       element.completed?checked=true:checked=false;
    }else{
        selected = false;
        checked=false;
    }


    return(
        <div>
            <label>user Name</label>
            {users&&<Select Items={users} Boxname='userId' selectValue={select} default={false} selected={selected&&selected}></Select>}<br /> 
            {/* {users&&<input type='text' onChange={InputElement} name='userId' defaultValue={element.userName} />}*/}
            {users&&<TextField variant="standard" label='title' type='text' onChange={select} name='title' defaultValue={element.title} />}<br />
            {/* <label htmlFor="status">Completed</label> */}
            {/* <input type='checkbox' id='status' name='completed' onChange={select}  /><br /> */}
            <FormControlLabel
                id='status'
                name='completed'
                control={<Checkbox />}
                label="Completed"
                labelPlacement="start"
                onChange={select}
                />
            <button onClick={createNew}>Enter</button>
        </div>
    )
}

export default Edit;