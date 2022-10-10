import React from "react";
import { useEffect,useState,useCallback } from "react";


function Table(props){

    const DelRequest = useCallback((deleteId) => {
        return ( fetch('http://localhost:4000/delete',{
                    method: "POST",
                    body: JSON.stringify(deleteId),
                    headers: {
                     'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((result) => console.log(result))

                )},[])       
    
   
    

    function ClickDelete(){
        console.log(props.indexValue);
        props.removeItem(props.indexValue);
        var id = {id:props.id};
         DelRequest(id)

    }

    function clickEdit(att){
        att.preventDefault();
        var a=   props.editItem(props.indexValue)
        console.log(a);
    }

    return (        
         <tr>
            {/* <td>{props.id}</td> */}
            <td>{props.user}</td>
            <td>{props.heading}</td>
            <td>{props.status}</td>
            <td><button onClick={ClickDelete}>Delete</button></td>
            <td><button onClick={clickEdit}>Edit</button></td>
        </tr>
    )
}

export default Table;