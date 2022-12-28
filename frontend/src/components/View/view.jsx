import React from "react";
import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import '../../style.css';
import Header from "./Header";


function View(){

    const [title, setTitle] = useState()
    var {id} = useParams();
    const viewFetch = useCallback(() => {
        return fetch('http://localhost:4000/view/'+id)
                .then(response => response.json())
                .then((items) => setTitle(items.Item[0].title))
    });

    viewFetch();

    return(
        <div style={{ textAlign:'center'}}>
            <Header id={id} title={title&&title} />
            <Outlet />
        </div>
    )
}

export default View;