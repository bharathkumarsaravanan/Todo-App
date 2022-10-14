import React from "react";
import { useState,useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";


function View(){

    const [viewItem, setViewItem] = useState({})
    const [title, setTitle] = useState({})
    var {id} = useParams();
    console.log(id);

    const ViewFetch = () => {
        return fetch('http://localhost:4000/view/'+ id)
                .then(response => response.json())
                .then((data) =>{
                    // console.log(data.Item[0])
                    setViewItem(data.Item[0])
                    setTitle(data.title[0])
                })
        }

    const RemoveToolFetch = useCallback((removeId) =>{
        fetch(`http://localhost:4000/view/${id}/remove`,{
            method: 'POST',
            body: JSON.stringify(removeId),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then((result) => console.log(result))
    })

    useEffect(() =>{
        ViewFetch();
    },[])

    console.log(viewItem)

    function RemoveTools(){
        console.log(viewItem.id);

        RemoveToolFetch({id: viewItem.id})

    }

    if(viewItem!==undefined){
    var editPath = `/show/${id}/update/${viewItem.id}`
    }
    var addPath = `/show/${id}/add`

    return(
        <div style={{ textAlign:'center'}}>
            <Typography variant="h3">{title.title}</Typography>
            <div style={{display:'flex',gap:'10px', justifyContent:'center',margin:'30px'}}>
                {viewItem===undefined? <Link to={addPath}><Button variant="contained">Add tools</Button></Link>: <Link to ={editPath}><Button variant="contained">Update tools</Button></Link>}<br /><br />
                {viewItem!==undefined&&<Button variant="contained" color="error" onClick={RemoveTools}>Remove All</Button>}
            </div>
            
            <List>
                <ListItem>Frontend:  {viewItem!=undefined&&viewItem.frontend}</ListItem>
                <ListItem>Backend:  {viewItem!=undefined&&viewItem.backend}</ListItem>
                <ListItem>Database:  {viewItem!=undefined&&viewItem.database}</ListItem>
            </List>
        </div>
    )

}

export default View;