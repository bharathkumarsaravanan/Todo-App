import React from "react";
import  ReactDOM  from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


function UpdateFeatures(props){
    const [file, setFile] = useState();
    const {id} = useParams();
    function handleChange(event){
        console.log(event.target.files[0])
        setFile(event.target.files[0])
    }
    function handleSubmit(event){
        const formData = new FormData();
        formData.append('featureImage',file);
        formData.append('title','test');
        console.log(formData.get('featureImage'));
        console.log(formData.get('title'));
        var url = 'http://localhost:4000/view/'+id+'/home/features/upload';

        axios({url: url, method: 'POST', data: formData, headers: {'Content-Type': 'multipart/form-data'}}).then(response => console.log(response.data))
        props.setVisible(false)
    }   
    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal">
            <div className='popup' style={{top:'15rem',left:'50rem'}}>
                <CloseIcon 
                    style={{position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} 
                    onClick={() => props.setVisible(false)}
                        />
                {/* <form onSubmit={handleSubmit} encType='multipart/form-data'> */}
                    <input type='file' name='featureImage' onChange={handleChange} />
                    <button onClick={handleSubmit}>Upload</button>
                {/* </form> */}
            </div>
        </div>,document.getElementById('portal')
    )
}
export default UpdateFeatures;