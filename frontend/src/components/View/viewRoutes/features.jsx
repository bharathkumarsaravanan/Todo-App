import React from "react";
import {useParams} from 'react-router-dom';
import { useState, useEffect } from "react";
import FeatureImages from "./featureImages";
import {motion} from "framer-motion";
import AddCardIcon from '@mui/icons-material/AddCard';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateFeatures from "../Popups/updateFeatures";
import RemoveFeatures from "../Popups/removeFeatures";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListSubheader from '@mui/material/ListSubheader';
import FeaturePop from "../Popups/FeatureImagePop";

function Features(){
    const {id} = useParams();
    const [features, setFeatures] = useState([]);
    const [addPopUp, setaddPopUp] = useState(false);
    const [remPopUp, setRemPopUp] = useState(false);
    const [updateSync, setUpdateSync] = useState(false);
    const [viewPop, setViewPop] = useState(false);
    const [singleFeature, setSingleFeature] = useState({});

    const featureFetch = () => {
        fetch('http://localhost:4000/view/'+id+'/home/features')
        .then(response => response.json())
        .then((data) => setFeatures(data.features))
    };

    useEffect(() => {
        featureFetch();
    },[]);

    useEffect(() => {
        console.log(viewPop)
    },[viewPop])

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

    function featureView(featureid){
        // console.log(featureid);
        setViewPop(true);
        setSingleFeature(prev => {
            return features.filter(data => {
                return data.id === featureid
            })
        })
    }

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.5}}
            exit={{opacity: 0,transition:{duration:.5}}}>
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
                    {features.length!==0&&features.map((feature, index) => 
                        <FeatureImages 
                            key={index} 
                            feature={feature} 
                            remove={false} 
                            width='20rem' 
                            height='15rem' 
                            delaySec={index}
                            state={featureView}
                             />)}
                </ImageList>
            </div>
            <FeaturePop visible={viewPop} setVisible={setViewPop} feature={singleFeature}  />
        </motion.div>
        )

}

export default Features;