import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

function SingleFeatureImage(props){
    var {id, featureid} = useParams();
    const [image, setImage] = useState();
    console.log(featureid);
    const featureImageFetch = () => {
        fetch('http://localhost:4000/view/'+id+'/featureimage/'+featureid)
        .then(response => response.json())
        .then(data => setImage(data.data[0]))
    }
    useEffect(() => {
        featureImageFetch()
    },[])


    return(
        <div className="singleFeatureBody">
            <Typography variant="h3">{image&&image.title}</Typography>
            <img style={{maxHeight:'25rem',minHeight:'22rem',minWidth:'40rem',maxWidth:'45rem', marginTop:'2rem'}}
                 src={image&&"http://localhost:4000/images/features/"+image.imgurl} />
            <Typography variant="body2" sx={{color:'#7f8487'}}>{image&&image.description}</Typography>
        </div>
    )
}

export default SingleFeatureImage;