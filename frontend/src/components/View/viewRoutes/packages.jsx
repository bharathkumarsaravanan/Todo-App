import React from "react";
import { useParams } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import PackageList from "./packageList";

function Overview(){

    const [packages, setPackages] = useState([])
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
        <div style={{position:'relative',top:'15rem',left:'20rem'}}>
            {packages&&packages.map((Item,index) => <PackageList key={index} name={Item.name} use={Item.use} />)}
        </div>
    )
}

export default Overview;