import React from "react";
import { useState,useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import '../../style.css';
import Header from "./Header";
import ViewHome from "./viewHome"


function View(){
    const [viewItem, setViewItem] = useState({})
    const [title, setTitle] = useState()
    var {id} = useParams();
    const viewFetch = useCallback(() => {
        return fetch('http://localhost:4000/view/'+id)
                .then(response => response.json())
                .then((items) => setTitle(items.Item[0].title))
    })
    viewFetch();
    return(
        <div style={{ textAlign:'center'}}>
            <Header id={id} title={title&&title} />
            <Outlet />
        </div>
    )
}

export default View;