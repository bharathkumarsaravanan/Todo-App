import React from "react";
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {TextField} from "@mui/material";

function EditPopUp(props){

    const [values, setValues] = useState({title:'',description:''})
    const defaultVal = () => {
            fetch('http://localhost:4000/view/'+props.defaultId)
            .then(response => response.json())
            .then(data => setValues(data.Item[0]))
        }

    useEffect(() => {
            defaultVal();
    },[]);

    function inputeValues(inputs){
        var {name, value} = inputs.target;
        setValues(prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    }

    function enterInputs(){
        props.returnValue(values);
    }

    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal">
            <div className='popup'>
                <CloseIcon 
                    style={{position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} 
                    onClick={() => props.setVisible(false)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Title" 
                    variant="outlined" 
                    name='title' 
                    onChange={inputeValues}
                    style={{width:'19rem'}} 
                    value={values&&values.title} />
                <textarea name='description' className="editTextArea" rows='5' onChange={inputeValues} value={values&&values.description} /><br/>
                <Button variant="contained" style={{marginLeft:'8rem'}} onClick={enterInputs}>Update</Button>
            </div>
        </div>,document.getElementById('portal')

    )
}

export default EditPopUp;