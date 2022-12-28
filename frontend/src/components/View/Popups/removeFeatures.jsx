import React from "react";
import  ReactDOM from "react-dom";
import { useState, useEffect, useCallback } from "react";
import FeatureImages from "../viewRoutes/featureImages";
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import {Button} from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';

function RemoveFeatures(props){
    const [features, setFeatures] = useState([]);
    const [removeFeatures, setRemoveFeatures] = useState([])
    const {id} = useParams();
    const featureFetch = () => {
        fetch('http://localhost:4000/view/'+id+'/home/features')
        .then(response => response.json())
        .then(data => setFeatures(data.features))
    }
    const postFeatureFetch = useCallback((bodyData) => {
        fetch('http://localhost:4000/view/'+id+'/home/features/delete',{
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(msg => console.log(msg))
       
        
    })
    useEffect(() =>{
        featureFetch();
    },[])

    useEffect(() => {
        if(props.upd){
            setFeatures(props.features)
            props.setupd(false)
        }
    },[props.features, props.setupd])
    
    function removeIds(props){
        setRemoveFeatures(prev => {
            return [...prev,{'id':props}]
        })
    }

    function omitRemoveIds(props){
        console.log(props)
        setRemoveFeatures(prev => {
            return prev.filter(item => item.id !== props)
        })
    }

    function enterClick(){
        console.log(features)
        removeFeatures.map((rem) => {
            setFeatures(prev => {
                return prev.filter((data) => data.id !== rem.id)
            })
        })
        postFeatureFetch(removeFeatures);
        props.instantUpd(removeFeatures)
        props.setVisible(false);
        setRemoveFeatures([])
    }

    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal">
            <div className="popup">
                <CloseIcon 
                    style={{position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} 
                    onClick={() => props.setVisible(false)}/>
                <div style={{display:'flex', maxWidth:'40rem', flexWrap:'wrap', gap:'1rem', marginTop:'1rem'}}>
                <ImageList sx={{width:400,height:300}} className="muiImageSlides">
                    <ImageListItem key="Subheader" cols={3}>
                        <ListSubheader component="div" style={{backgroundColor:'#4e5055', color:'aliceblue'}}>select</ListSubheader>
                    </ImageListItem>
                    {features.length!==0&&features.map((feature, index) => <FeatureImages 
                                                                                key={index}
                                                                                feature={feature} 
                                                                                width='10rem'
                                                                                height='7rem' 
                                                                                remove={true}
                                                                                omitRemId={omitRemoveIds}
                                                                                remId={removeIds} />)}
                </ImageList>
                </div>
                <Button variant="contained" onClick={enterClick}>Enter</Button>

            </div>
        </div>, document.getElementById('portal')
    )
}

export default RemoveFeatures;
