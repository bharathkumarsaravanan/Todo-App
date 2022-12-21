import React from "react";
import ReactDOM from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import {Button} from "@mui/material";
import {TextField} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import {useParams} from "react-router-dom";

function CreateLink(props){
    const [links, setLinks] = useState({figma:null, git:null, db:null});
    var {id} = useParams();
    console.log(id);

    useEffect(() => {
        fetch('http://localhost:4000/view/'+id+'/links')
        .then(response => response.json())
        .then(data => setLinks(data.data[0]))
    },[])
    const linkPostFetch = useCallback(() => {
        fetch('http://localhost:4000/view/'+id+'/links',{
            method: 'POST',
            body: JSON.stringify(links),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then(data => props.update(data.data[0]))
    })


    function getValue(datas){
        var {name, value} = datas.target;
        setLinks(prev => {
            return{
                ...prev,
                [name] : value,
            }
        })
        console.log(links)
    }

    function handleClick(){
        linkPostFetch();
        props.setVisible(false)
    }

    if(!props.visible) return null 
    return ReactDOM.createPortal(
        <div className="newPortal">
            <div className="popup" style={{top:'20rem', left:'50rem'}}>
                <CloseIcon 
                    style={{position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} 
                    onClick={() => props.setVisible(false)}
                />
                <TextField 
                    label="Figma" 
                    variant="standard"
                    name='figma'
                    value={links.figma}
                    onChange={getValue} /><br/>
                <TextField 
                    label="Git" 
                    variant="standard"
                    name='git'
                    value={links.git}
                    onChange={getValue} /><br/>
                <TextField 
                    label="Db" 
                    variant="standard"
                    name="db"
                    value={links.db}
                    onChange={getValue} /><br/>
                <Button variant="contained" onClick={handleClick}>Enter</Button>
            </div>
        </div>, document.getElementById('portal')
    )
}

export default CreateLink;
