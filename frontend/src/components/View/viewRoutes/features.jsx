import React from "react";
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import FeatureImages from "./featureImages";
import { Button } from "@mui/material";
import AddCardIcon from '@mui/icons-material/AddCard';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateFeatures from "../Popups/updateFeatures";
import RemoveFeatures from "../Popups/removeFeatures";

function Features(){
    const {id} = useParams();
    const [features, setFeatures] = useState([]);
    const [addPopUp, setaddPopUp] = useState(false);
    const [remPopUp, setRemPopUp] = useState(false);
    const featureFetch = () => {
        fetch('http://localhost:4000/view/'+id+'/home/features')
        .then(response => response.json())
        .then((data) => setFeatures(data.features))
    }
    useEffect(() => {
        featureFetch();
    },[])
    console.log(features)

    return(
        <div>
            <UpdateFeatures visible={addPopUp} setVisible={setaddPopUp} />
            <RemoveFeatures visible={remPopUp} setVisible={setRemPopUp} />
            <AddCardIcon 
                variant='contained' 
                fontSize="large"
                style={{position:'absolute', left:'85rem',top:'0rem',zIndex:'99',cursor:'pointer'}}
                onClick={() => setaddPopUp(true)}>Add</AddCardIcon>
            <DeleteOutlineIcon
                variant="contained"
                fontSize="large"
                style={{position:'absolute', left:'85rem',top:'3rem',zIndex:'99',cursor:'pointer'}}
                onClick={() => setRemPopUp(true)}>Remove</DeleteOutlineIcon>
            <div className="featureImagesContainer">
                {features.length!==0&&features.map((feature) => <FeatureImages title={feature.title} imgurl={feature.imgurl} />)}
            </div>
        </div>
        )

}

export default Features;