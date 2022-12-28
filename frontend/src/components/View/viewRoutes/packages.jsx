import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PackageList from "./packageList";
import { Button } from "@mui/material";
import EditTasks from "../Popups/EditTasks";
import { motion } from "framer-motion";

function Overview(){

    const [packages, setPackages] = useState([]);
    const [editPopUp, setEditPopUp] = useState(false);
    var {id} = useParams();
    
    const packagesFetch = () => {
                fetch('http://localhost:4000/view/'+id+'/home/packages')
                .then(response => response.json())
                .then(packageItems => setPackages(packageItems.packages))
    };

    useEffect(() =>{
        packagesFetch();
    },[]);

    return(
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:1, delay:.5}}
            exit={{opacity: 1,transition:{duration:.5}}}
            className="viewElement">
            <Button 
                variant="contained" 
                style={{position:'absolute', right:'-25rem',top:'-2.2rem'}}
                onClick={() => setEditPopUp(true)}>Update
            </Button>
            <EditTasks visible={editPopUp} setVisible={setEditPopUp} defaultPacks={packages} updatepacks={setPackages} />
            <div className='packagesList'>
                {packages&&packages.map((Item,index) =>  <PackageList key={index} name={Item.name} use={Item.use} />)}
            </div>
        </motion.div>
    )
}

export default Overview;