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
        <div>
            <Button 
                variant="contained" 
                style={{position:'absolute', left:'80rem',top:'0rem'}}
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