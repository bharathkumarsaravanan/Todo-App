import React from "react";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import {motion} from "framer-motion";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Options from "../popups/options";


function Rows(listItem){

    const [optionPopup, setOptionPopup] = useState(false);

  

    function DeleteItem(){
        // console.log(listItem.columns.id);

        listItem.remove(listItem.columns.id);
    }
    function EditPopUp(status){
        console.log(status)
        // console.log(listItem.columns.id)
        listItem.edit(status, listItem.columns.id)
    }

    const showPath = `/show/${listItem.columns.id}/home/overview`;

    return(
        <TableRow 
            hover
            component={motion.row} 
            animate={{x: [-200,0],opacity:[0,1]}} 
            transition={{duration:1,delay:listItem.delay!==0?listItem.delay*0.2:0}}>            
            <TableCell>{listItem.delay + 1}</TableCell>
            <TableCell>{listItem.columns.title}</TableCell>
            <TableCell>
                <MoreVertIcon onClick={() => setOptionPopup(!optionPopup)}  />
                <Options 
                    PopUp={optionPopup}
                    editPop={EditPopUp}
                    removeFunction={DeleteItem}
                    viewPath={showPath} 
                    setPopUp={setOptionPopup} 
                    topAlign={listItem.index!==11?listItem.index*4.2:listItem.index} />
            </TableCell>
        </TableRow>
    )
}

export default Rows;