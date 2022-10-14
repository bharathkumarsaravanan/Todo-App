import React from "react";
import { useState,useCallback,useEffect } from "react";
import  Select  from "./Select";

function Create(){

    const [element,setElement] = useState({userId: '',title: '',status:''});
    const [users,setUsers] = useState()


    const userFetch = ()=>{
        return fetch('http://localhost:4000/create')
        .then((response) => response.json())
        .then((data) => {
         setUsers(data.users)
         });
    }

    useEffect(() =>{
        userFetch()
    },[])

    const createFetch = useCallback((Item)=> {
        console.log(Item)
        return(
            fetch('http://localhost:4000/create',{
                method: 'POST',
                body: JSON.stringify(Item),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then((response) => response.json())
            .then((result) => console.log(result))
        )
    },[])

    function InputElement(props){
        var {name,value,checked} = props.target;
        setElement((prev) => {
            return{
                ...prev,
                [name] : name=='status'?checked:value,
            }
        })
    }

    function createNew(){
            console.log(element)
            createFetch(element);        
    }


    return(
        <div>
            <label>user name</label>
            {users&&<Select Items={users} Boxname='userId' default={true} selectValue={InputElement}></Select>}<br /> 
            <input type='text' onChange={InputElement} name='userId' value={element.userId} /><br />
            <label>title</label>
            <input type='text' onChange={InputElement} name='title' value={element.title} /><br />
            <label htmlFor="status">Completed</label>
            <input type='checkbox' id='status' name='status' onChange={InputElement} value={element.status} /><br />
            <button onClick={createNew}>Enter</button>
        </div>
    )
}

export default Create;