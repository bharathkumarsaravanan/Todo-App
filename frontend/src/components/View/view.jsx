import React from "react";
import { useState,useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


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
    var editPath = `/show/update/${viewItem.id}`
    }
    var addPath = `/show/${id}/add`

    return(
        <div>
            <h1>{title.title}</h1>
            {viewItem===undefined? <Link to={addPath}>Add tools</Link>: <Link to ={editPath}>Update tools</Link>}<br /><br />
            {viewItem!==undefined&&<button onClick={RemoveTools}>Remove All</button>}
            
            
            <ul>
                <li>Frontend:  {viewItem!=undefined&&viewItem.frontend}</li>
                <li>Backend:  {viewItem!=undefined&&viewItem.backend}</li>
                <li>Database:  {viewItem!=undefined&&viewItem.database}</li>
            </ul>
        </div>
    )

}

export default View;