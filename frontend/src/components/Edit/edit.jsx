import React from "react";
import { useState,useCallback,useEffect } from "react";
import { useParams } from "react-router-dom";


function Edit(){

    const [element,setElement] = useState({id:'',userId:'',title:'',completed:''});

    var {id} = useParams();
    console.log(id);
    console.log(element)


    const EditGetFetch = () => {
        return fetch('http://localhost:4000/edit/'+id)
               .then((response) => response.json())
               .then((data) => {
                setElement(data.Editdata[0])
                });
    }

    const EditPostFetch = useCallback((Item) => {
        return fetch('http://localhost:4000/edit/'+id,{
                    method: 'POST',
                    body: JSON.stringify(Item),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                })
                .then((response) => response.json())
                .then((result) => console.log(result))
    })

    useEffect(() => {
        EditGetFetch();
    },[])

    function InputElement(props){
        var {name,value,checked} = props.target;
        setElement((prev) => {
            return{
                ...prev,
                [name] : name=='completed'?checked:value,
            }
        })
    }

    function createNew(){
        EditPostFetch(element);
        console.log(element)
    }



    return(
        <div>
            <label>userId</label>
            <input type='text' onChange={InputElement} name='userId' defaultValue={element.userId} /><br />
            <label>title</label>
            <input type='text' onChange={InputElement} name='title' defaultValue={element.title} /><br />
            <label htmlFor="status">Completed</label>
            <input type='checkbox' id='status' name='completed' onChange={InputElement}  /><br />
            <button onClick={createNew}>Enter</button>
        </div>
    )
}

export default Edit;