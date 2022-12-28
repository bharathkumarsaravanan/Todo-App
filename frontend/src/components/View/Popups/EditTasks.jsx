import React from "react";
import ReactDOM  from "react-dom";
import { useState, useEffect, useCallback } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import Btn from "./btn";
import { useParams } from "react-router-dom";

function EditTasks(props){
    const [packs, setPacks] = useState();
    const [allPackages, setAllPackages] = useState()
    var {id} = useParams();

    const allPacks = () => {
        fetch('http://localhost:4000/view/home/packages')
        .then(response => response.json())
        .then(data => setAllPackages(data.data))
    }

    const packagesFetch = () => {
        fetch('http://localhost:4000/view/'+id+'/home/packages')
        .then(response => response.json())
        .then(packageItems => setPacks(packageItems.packages))
    }

    const updatePacksFetch = useCallback(() => {
        fetch('http://localhost:4000/view/'+id+'/home/packages/update',{
            method: 'POST',
            body: JSON.stringify(packs),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(response => response.json())
            .then(data => console.log(data))
    })
    
    useEffect(() => {
        allPacks();
        packagesFetch();
        console.log('cnjscj')
    },[]);
   
    function addNewPacks(value,addId){
       console.log(value)
       setPacks(prev => {
            return [...prev, value]
       })
    }

    function removePacks(value,remId){
        console.log('remove',value, remId)
        setPacks(prev => {
            return prev.filter(Items => {
                return Items.id !== remId
            })
        })
    }

    function updatePackages(){
        updatePacksFetch()
        props.updatepacks(packs)
        props.setVisible(false)
    }

    if(!props.visible) return null
    return ReactDOM.createPortal(
        <div className="newPortal">
            <div className='popup' style={{width:'40rem'}}>
                <CloseIcon 
                        style={{position:'absolute',top:'2px',right:'2px',cursor:'pointer'}} 
                        onClick={() => props.setVisible(false)}
                    />
                    <div style={{display:'flex', gap:'2rem', flexWrap:'wrap', marginLeft:'4rem'}}>
                        {packs&&packs.map((Item, index) => <Btn Item={Item} key={index} type='remove' returnValue={removePacks} visiblity={true} />)}
                    </div>
                    <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginTop:'2rem', marginLeft:'4rem'}}>
                        {allPackages&&allPackages.map((Item, index) => <Btn Item={Item} key={index} type='add' returnValue={addNewPacks} visiblity={false} /> )}
                    </div>
                    <Button variant="outlined" size="large" style={{marginLeft:'17rem', marginTop:'3rem'}} onClick={updatePackages}>Enter</Button>
            </div>
        </div>,document.getElementById('portal')
    )
}

export default EditTasks;