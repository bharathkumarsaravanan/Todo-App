import React from "react";
import {Button} from "@mui/material";
import CreateLink from "../Popups/CreateLink";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {Typography} from "@mui/material";

function Links(){
    const [addPop, setAddPop] = useState(false);
    const [links, setLinks] = useState()
    var {id} = useParams()
    useEffect(() => {
        fetch('http://localhost:4000/view/'+id+'/links')
        .then(response => response.json())
        .then(data => setLinks(data.data[0]))
    },[])

    return(
        <div style={{left:'10rem', top:'5rem' }}>
            <CreateLink visible={addPop} setVisible={setAddPop} update={setLinks} />
            <Button 
                variant="contained" 
                style={{position:'absolute', left:'65rem', width:'8rem'}}
                onClick={() => setAddPop(true)}>Add link</Button>
            <div className="links">
                {links&&links.git!== null&&<a href={links.git} target="_blank">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                    <Typography variant="h5">Git</Typography>
                </a>}

                {links&&links.figma!==null&&<a href={links.figma} target="_blank">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" />
                    <Typography variant="h5">Figma</Typography>
                </a>}

                {links&&links.db!==null&&<a href={links.db} target="_blank">
                    <img 
                        src="https://pbs.twimg.com/profile_images/1136901164039991297/-Vt-vAYQ_400x400.png" />
                    <Typography variant="h5">Db</Typography>
                </a>}
            </div>
           
        </div>
    )
}

export default Links;