import React from "react";
import { useState } from "react";
import {Typography} from "@mui/material";
import { useParams } from "react-router-dom";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';


function FeatureImages(props){
    const [selected, setSelected] = useState(true);
    const [selectStyle, setSelectStyle] = useState('none');
    var {id} = useParams();
    function handleClick(){
                if(props.remove){
                    if(selected){
                        // console.log('selected ',props.feature.id)
                        props.remId(props.feature.id)
                        setSelected(prev => !prev)
                        setSelectStyle('3px solid blue')
                    }else{
                        console.log('deselected ',props.feature.id)
                        props.omitRemId(props.feature.id)
                        setSelectStyle('none')
                        setSelected(prev => !prev)
                    }
                }
    }
    return(
        <ImageListItem style={{maxWidth:'20rem'}}>
            <img 
                src={"http://localhost:4000/images/features/"+props.feature.imgurl}
                style={{width:props.width, border:selectStyle, height:props.height,maxWidth:'20rem', maxHeight:'15rem'}}
                alt={props.feature.title}
                loading="lazy"
                onClick={handleClick}
                // className='featureImages' 
                />
            <ImageListItemBar
                title={props.feature.title}
                actionIcon={
                !props.remove&&<IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${props.feature.title}`}
                    onClick={() =>   window.location.href = '/show/'+id+'/featureimage/'+props.feature.id}
                >
                    <InfoIcon />
                </IconButton>
                }
             />
            
        </ImageListItem>
    )
}

export default FeatureImages;