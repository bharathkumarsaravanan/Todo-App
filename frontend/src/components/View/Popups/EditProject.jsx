import React from "react";
import ReactDOM from 'react-dom';
import { useState, useEffect, useCallback } from "react";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function EditPopUp(props){
    const [values, setValues] = useState({title:'',description:''})
    const defaultVal = () => {
            fetch('http://localhost:4000/view/'+props.defaultId)
            .then(response => response.json())
            .then(data => setValues(data.Item[0]))
        }

    useEffect(() => {
            defaultVal();
    },[])
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
            <div className='popup' style={{top:'20rem',left:'45rem', width:'20rem'}}>
                <CloseIcon 
                    style={{position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} 
                    onClick={() => props.setVisible(false)}
                />
                <input type='text' name='title' onChange={inputeValues} value={values&&values.title} />
                <textarea name='description' rows='5' onChange={inputeValues} value={values&&values.description} /><br/>
                <Button variant="contained" onClick={enterInputs}>Update</Button>
            </div>
        </div>,document.getElementById('portal')

    )
}

export default EditPopUp;