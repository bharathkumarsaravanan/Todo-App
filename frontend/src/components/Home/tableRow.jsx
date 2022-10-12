import React from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";

function TableRow(listItem){

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

    function DeleteItem(){
        console.log(listItem.columns.id);
        var id = {id: listItem.columns.id}

        deleteFetch(id);
    }

    // function EditItem(){
    //     console.log(listItem.columns.id);
    //     window.location.href = `/edit/${listItem.columns.id}`
    //     this.props.history.push({pathname: '/edit',
    //     state: {id: listItem.columns.id }}
    //     );
    // }
    const path = `/edit/${listItem.columns.id}`;
    const showPath = `/show/${listItem.columns.id}`;

    return(
        <tr>
            <td>{listItem.columns.userId}</td>
            <td>{listItem.columns.title}</td>
            <td>{listItem.columns.completed? 'completed':'not completed'}</td>
            <td><button onClick={DeleteItem}>Delete</button></td>
            {/* <td><button onClick={EditItem}>Edit</button></td> */}
            <td><Link to= {path} >Edit</Link></td>
            <td><Link to= {showPath}>View</Link></td>
            {/* <td><a href='' download='file'> download </a></td> */}

        </tr>
    )
}

export default TableRow