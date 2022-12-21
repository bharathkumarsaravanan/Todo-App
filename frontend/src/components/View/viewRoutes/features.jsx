import React from "react";
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import FeatureImages from "./featureImages";
import { Button } from "@mui/material";
import AddCardIcon from '@mui/icons-material/AddCard';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateFeatures from "../Popups/updateFeatures";
import RemoveFeatures from "../Popups/removeFeatures";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';

function Features(){
    const {id} = useParams();
    const [features, setFeatures] = useState([]);
    const [addPopUp, setaddPopUp] = useState(false);
    const [remPopUp, setRemPopUp] = useState(false);
    const [updateSync, setUpdateSync] = useState(false)
    console.log(features)
    const featureFetch = () => {
        fetch('http://localhost:4000/view/'+id+'/home/features')
        .then(response => response.json())
        .then((data) => setFeatures(data.features))
    }
    useEffect(() => {
        featureFetch();
    },[])
    function instantAdd(newItem){
            console.log(newItem)
            setUpdateSync(true)
            setFeatures(prev => {
                return [...prev,newItem]
            })
    }
    function instantRemove(remItem){
        remItem.map((Item) => {
            setFeatures(prev => {
                return prev.filter(data => data.id !== Item.id)
            })
        })
    }
    return(
        <div style={{left:'10rem', top:'5rem' }}>
            <UpdateFeatures visible={addPopUp} setVisible={setaddPopUp} instantUpd={instantAdd} />
            <RemoveFeatures visible={remPopUp} setVisible={setRemPopUp} features={features} upd={updateSync} setupd={setUpdateSync} instantUpd={instantRemove} />
            <AddCardIcon 
                variant='contained' 
                fontSize="large"
                style={{position:'absolute', right:'-10rem',cursor:'pointer'}}
                onClick={() => setaddPopUp(true)}>Add</AddCardIcon>
            <DeleteOutlineIcon
                variant="contained"
                fontSize="large"
                style={{position:'absolute', right:'-10rem',top:'4rem',cursor:'pointer'}}
                onClick={() => setRemPopUp(true)}>Remove</DeleteOutlineIcon>
            <div>
                <ImageList sx={{width:985,height:450}} className="muiImageSlides">
                    <ImageListItem key="Subheader" cols={3}>
                        <ListSubheader component="div" style={{backgroundColor:'#4e5055', color:'aliceblue'}}>Features</ListSubheader>
                    </ImageListItem>
                    {features.length!==0&&features.map((feature, index) => <FeatureImages key={index} feature={feature} remove={false} width='20rem' height='15rem' />)}
                </ImageList>
            </div>
        </div>
        )

}

export default Features;