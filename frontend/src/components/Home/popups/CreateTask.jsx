import React from "react";
import ReactDOM  from "react-dom";
import { TextField } from "@mui/material";
import {TextareaAutosize} from "@mui/material";
import {Button} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import {Select} from "@mui/material";
import {MenuItem} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from "framer-motion";


function CreatePopup(props){

    const [values, setValues] = useState({title:'',description:'',projectId:'',status:'todo'})
    const [menuItems, setMenuItems] = useState()


    var projectFetch = ()=> {
        return fetch('http://localhost:4000/tudos')
                .then(response => response.json())
                .then((data) => setMenuItems(data.tudos))
    }

    useEffect(() => {
        projectFetch();
    }, [])

    function Inputs(element){
        console.log(element.target.value);
        const {name,value} = element.target;
        console.log(document.getElementsByName('status')[0].value)

        setValues((prev) => {
            return{
                ...prev,
                [name] : value,
                projectId : props.project,
                status : document.getElementsByName('status')[0].value,
            }
        })
    }

    function InputValues(){
        console.log(values);
        if(values.title === '' || values.description === ''){
            console.log('empty value')
        }else{
            props.getValue(values);

        }
        setValues({title:'',description:''})
        props.popup()
    }

    if(!props.portal) return null

    return ReactDOM.createPortal(
        <motion.div animate={{opacity:[0,1]}} transition={{duration:1}} className="newPortal">

            <motion.div 
                animate={{y:[-1000,-150]}} 
                transition={{delay:0.3}} className="popup create">
                <CloseIcon onClick={() => props.popup()} className="closeIcon"   />

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="projectId"
                    value={props.project}
                    label="Project Name"
                    onChange={Inputs}>

                    {menuItems&&menuItems.map((Item) => <MenuItem value={Item.id}>{Item.title}</MenuItem>)}

                </Select>

                <TextField id="outlined-basic" label="Task" variant="outlined" name="title" onChange={Inputs} value={props.default?props.default.title:values.title} />
                
                <TextareaAutosize
                    placeholder="Descriptions"
                    minRows={6}
                    style={{ width: 320 }}
                    name="description"
                    value={props.default?props.default.description:values.description}
                    onChange={Inputs}/>

                <NativeSelect
                    name="status"
                    style={{width:'8rem'}}
                    defaultValue= {props.default?props.default.status:'todo'}
                    label= "status"
                    onChange={Inputs}>
                        
                    <option value='todo'>Todo</option>
                    <option value='completed'>Completed</option>

                </NativeSelect>

                <Button variant="contained" onClick={InputValues}>Enter</Button>
            </motion.div>
        </motion.div>, document.getElementById('portal')

    )
}

export default CreatePopup;