import React from "react";
import  ReactDOM  from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useState} from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import axios from 'axios';
import {ErrorAlert} from "./Alerts";
import TextareaAutosize from '@mui/material/TextareaAutosize';



function UpdateFeatures(props){

    const [file, setFile] = useState();
    const [title, setTitle] = useState({Title:'', description:''});
    const [erAlert, setErAlert] = useState(false);
    const {id} = useParams();
    function titleValue(val){
        setErAlert(false)
        var {name, value} = val.target;
        setTitle(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    function handleChange(event){
        setErAlert(false)
        console.log(event.target.files[0])
        setFile(event.target.files[0])
    }

    function handleSubmit(){
        console.log(title, file)
        if(title.Title !== ''&&file){
            const formData = new FormData();
            formData.append('featureImage',file);
            console.log(title);
            formData.append('title',title.Title);
            formData.append('description',title.description);
            console.log(formData.get('featureImage'));
            console.log(formData.get('title'));
            var url = 'http://localhost:4000/view/'+id+'/home/features/upload';
            axios({url: url, method: 'POST', data: formData, headers: {'Content-Type': 'multipart/form-data'}}).then(response => props.instantUpd(response.data[0]))
            props.setVisible(false)
        }
        else{
            setErAlert(true);
        }
     
    }  

    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal">
            <ErrorAlert visible={erAlert} />
            <div className='popup'>
                <CloseIcon 
                    className='closeIcon' 
                    onClick={() => {
                        setErAlert(false)
                        props.setVisible(false)}}
                        />
                    <TextField id="outlined-basic" label="Title" variant="outlined" name="Title" onChange={titleValue} />
                    <TextareaAutosize
                        aria-label="minimum height"
                        name="description"
                        onChange={titleValue}
                        minRows={5}
                        placeholder="Descriptions"
                        style={{ width: 340 }}
                        />
                    <input type='file' name='featureImage' onChange={handleChange} />
                    <Button variant="contained" onClick={handleSubmit}>Upload</Button>
            </div>
        </div>,document.getElementById('portal')
    )
}
export default UpdateFeatures;