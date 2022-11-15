import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

function TechButtons(props){
    const [selected, setSelected] = useState({btnVariant:'outlined',btnSize:'small'})
    const [cancel, serCancel] = useState(true)
    function selectPackage(){
        if(cancel){
            setSelected({btnVariant:'contained',btnSize:'medium'})
            props.add(props.tech.id)
            
        }else{
            setSelected({btnVariant:'outlined',btnSize:'small'})
            props.remove(props.tech.id)
        }
        serCancel((prev) => !prev)
    }

    return(
        <Button variant={selected.btnVariant} size={selected.btnSize} onClick={selectPackage}>{props.tech.name}</Button>
    )
}

export default TechButtons;