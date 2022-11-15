import React from "react";
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import {Typography} from "@mui/material";
import {Button} from "@mui/material";
import {TextareaAutosize} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Alert from './Alert'
import TechButtons from "./techBtn";
function CreateProject(props){
    const [value, setValue] = useState({title:'', description:''})
    const [alert, setAlert] = useState(false);
    const [techs, setTechs] = useState([]);
    const [packages, setPackages] = useState([{}])
    console.log(techs[0])
    const techFetch = () => {
        fetch('http://localhost:4000/create')
        .then(response => response.json())
        .then(data => setTechs(data.techs))
    }
    useEffect(() => {
        techFetch()
    },[])
    function InputValues(Items){
        const {name,value} = Items.target;
        setAlert(false)
        setValue(prev => {
            return{
                ...prev,
                [name]: value,
            }
        })
    }
    function enterValues(){
        if(value.title === '' || value.description === '' || packages.length === 1){
                setAlert(true)
        }else{
            console.log(packages)
            props.returnValue(value,packages);
            setAlert(false)
            setValue({title:'', description:''})
            setPackages([{}])
            props.setVisible(!props.visible)
        }
    }
    function addPackages(id){
        setPackages(prev =>{
            return[...prev,{'id':id}]
        })
    }
    function removePackages(id){
        setPackages(prev => {
            return prev.filter((Items) => {
                return Items.id !== id
            })
        })
    }

    if(!props.visible) return null

    return ReactDOM.createPortal(
        <div className="newPortal">
            <Alert visible={alert} variant='filled' severity='error' message='Input is empty' />
            <div className='popup' style={{top:'20rem',left:'45rem', width:'20rem'}}>
                <CloseIcon style={{position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} 
                    onClick={() => {
                        props.setVisible(!props.visible)
                        setAlert(false)
                        }} />
                <TextField 
                    style={{width:'20rem'}}
                    id="standard-basic" 
                    label="Name" 
                    variant="standard" 
                    name="title" 
                    value={value.title}
                    onChange={InputValues} /><br/>
                <TextareaAutosize  
                    aria-label="minimum height"
                    minRows={5}
                    placeholder="Description"
                    style={{ width: '20rem',marginBottom:'-5rem' }}
                    name='description'
                    value={value.description}
                    onChange={InputValues}
                    /><br/>
                <div>
                    <Typography variant="h6" style={{opacity:'0.3'}}>Packages</Typography>
                    {techs.map((tech) => <TechButtons tech={tech} add={addPackages} remove={removePackages}/>)}
                </div>
                <Button variant="contained" size="large" onClick={enterValues}>Create</Button>

            </div>


        </div> , document.getElementById('portal')  
    )

}

export default CreateProject;