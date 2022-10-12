import React from "react";
import Add from "./add";
import { useParams } from "react-router-dom";
import { useCallback,useState } from "react";

function AddTools(){

    var {id} = useParams();

    const AddToolsFetch = useCallback((newTools) => {
        fetch( `http://localhost:4000/view/${id}/add`,{
            method: 'POST',
            body: JSON.stringify(newTools),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then((result) => console.log(result))
    })

    return(
        <Add id={id} postFetch={AddToolsFetch} default={true}/>
    )
}

export default AddTools;