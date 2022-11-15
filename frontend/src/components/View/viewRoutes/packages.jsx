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
        <div>
            <div className='packagesList'>
                {packages&&packages.map((Item,index) =>  <PackageList key={index} name={Item.name} use={Item.use} />)}
            </div>
        </div>
    )
}

export default Overview;