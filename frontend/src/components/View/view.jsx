import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


function View(){

    const [viewItem, setViewItem] = useState({})
    var {id} = useParams();
    console.log(id);

    const ViewFetch = () => {
        return fetch('http://localhost:4000/view/'+ id)
                .then(response => response.json())
                .then((data) =>{
                    // console.log(data.Item[0])
                    setViewItem(data.Item[0])
                })
        }

        useEffect(() =>{
            ViewFetch();
        },[])
        console.log(viewItem)

    return(
        <div>
            <ul>
                <li>{viewItem.userId}</li>
                <li>{viewItem.title}</li>
                <li>{viewItem.completed ? 'Completed' : 'not Completed'}</li>
            </ul>
        </div>
    )

}

export default View;