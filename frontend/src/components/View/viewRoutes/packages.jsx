import React from "react";
import { useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import PackageList from "./packageList";
import { Button } from "@mui/material";
import EditTasks from "../Popups/EditTasks";

function Overview(){

    const [packages, setPackages] = useState([]);
    const [editPopUp, setEditPopUp] = useState(false);
    var {id} = useParams();


    const packagesFetch = () => {
                fetch('http://localhost:4000/view/'+id+'/home/packages')
                .then(response => response.json())
                .then(packageItems => setPackages(packageItems.packages))
    }


    useEffect(() =>{
        packagesFetch();
    },[])


    console.log(packages);


    return(
        <div style={{marginLeft:'10rem', marginTop:'5rem'}}>
            <Button 
                variant="contained" 
                style={{position:'absolute', right:'-7rem',top:'-4rem'}}
                onClick={() => setEditPopUp(true)}>Update
            </Button>
            <EditTasks visible={editPopUp} setVisible={setEditPopUp} defaultPacks={packages} updatepacks={setPackages} />
            <div className='packagesList'>
                {packages&&packages.map((Item,index) =>  <PackageList key={index} name={Item.name} use={Item.use} />)}
            </div>
        </div>
    )
}

export default Overview;