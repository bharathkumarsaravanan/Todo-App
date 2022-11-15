import React from "react";
import { useCallback,useState,useEffect } from "react";
import Rows from "./Rows"
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import CreateProject from "./popups/CreateProject";



function Projects(){

    const [lists, setlists] = useState([]);
    const [createPop, setCreatePop] = useState(false);
    const [defaultValue, setDefaultValue] = useState({});

    const Request =  () => {
        return fetch('http://localhost:4000')
               .then((response) => response.json())
               .then((data) => setlists(data.tudoItems))
    }
    const createFetch = useCallback((Item, packages)=> {
        return(
            fetch('http://localhost:4000/create',{
                method: 'POST',
                body: JSON.stringify({'project': Item, 'packs': packages}),
                headers: {
                    'Content-type': 'application/json',
                }
            })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setlists(prev => {
                    return [ ...prev, result.newItem[0]]
                })
            })
        )
    },[])
    const deleteFetch = useCallback((deleteId) => {
        return(fetch('http://localhost:4000/delete',{
                    method: 'POST',
                    body: JSON.stringify(deleteId),
                    headers: {
                     'Content-type': 'application/json; charset=UTF-8',
                    }
                })
                .then((response) => response.json())
                .then((result) => console.log(result))
            )},[])


    useEffect(() => {
        Request();
    },[])

    function NewProject(Item, packages){
        // console.log(Item, packages);
        createFetch(Item, packages);
    }
    function removeProject(id){
        // console.log(id);
        var removeId = {id: id}
        deleteFetch(removeId);
        setlists(prev => {
            return prev.filter((Items) => {
                return Items.id !== id
            })
        })
    }


    

    return(
        <div>
        <Button variant="contained" style={{position:'absolute',left:'10rem'}} color="info" onClick={() =>setCreatePop((prev) => !prev)}>Create</Button>  
                  
            <Table sx={{ minWidth: 650 }} className= "tableContainer"  style={{width:'60%'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>no</TableCell>
                        <TableCell>App name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lists.map((list,index) => <Rows createVisible={setCreatePop} remove={removeProject}  columns= {list} index={index} key={index} delay={index} />)}
                </TableBody>
            </Table>

            <CreateProject visible={createPop} setVisible={setCreatePop} returnValue={NewProject} />

        </div>
    )
}


export default Projects;
