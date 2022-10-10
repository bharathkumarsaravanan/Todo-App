import React from "react";
import { useState,useCallback } from "react";



function CreatePopUp(props){

    const [newElement, setNewElement] = useState({
        userId : "",
        id : "",
        title : "",
        completed: ""
    
    });


    function value(ats){
        var {name, value,checked} = ats.target;
        setNewElement((prev) => {
            return {
                ...prev,
                [name] : name==='completed'? checked:value,
                
            }
        })
    }

    const createRequest = useCallback((newItem)=>{
        return fetch('http://localhost:4000/edit',{
                method: 'POST',
                body: JSON.stringify(newItem),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(response => response.json())
            .then() 

    })

    function AddNew(){

        setNewElement((prev) => {
            return {
                'id': prev.id+1
            }
        })

        console.log(newElement);
        createRequest(newElement);
        props.Add(newElement);
        console.log(props.visible);

        setNewElement({
            userId : "",
            id : "",
            title : "",
            completed: ""
        })
        props.PopUp();
    }

  


    return (
        <div className="createPopUp" style={{opacity: props.visible && 1}}>
            <button className="x" onClick={() => {
                props.PopUp();
            }}>X</button>
            {/* <input name = "id" placeholder = "id" onChange={value} value={newElement.id}/> */}
            <input name = "userId" placeholder = "userId" onChange={value} value={newElement.userId}/>
            <input name = "title" placeholder = "Title" onChange={value} value={newElement.title}/>
            <label htmlFor="status">completed</label>
            <input type = "checkbox" id="status" name="completed" onChange={value}/>
            <button onClick={AddNew}>Create</button>
        </div>
    )
}

export default CreatePopUp;