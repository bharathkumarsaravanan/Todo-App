import React from "react";
import { useState,useCallback,useEffect } from "react";
import Select from "./select";
import Add from "./add";
import { useParams } from "react-router-dom";

function Update(){

    var {id,listid} = useParams()

    var [selected,setSelected] = useState({})

    const Selecteditems = () => {
        fetch(`http://localhost:4000/update/${id}/update/${listid}`)
        .then(response => response.json())
        .then((data) => setSelected(data.selected[0]))
    }

    const UpdateToolsFetch = useCallback((newTools) => {
        fetch( `http://localhost:4000/update/${id}/update/${listid}`,{
            method: 'POST',
            body: JSON.stringify(newTools),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(response => response.json())
        .then((result) => console.log(result))
    })

    useEffect(() => {
        Selecteditems();
    },[])

    // console.log(selected);
    

    return(
        <div>
            <Add id={id} postFetch={UpdateToolsFetch} default={false} selected={selected}/>
        </div>
    )


}

export default Update;