import React from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Btn(props){

    function clickIcon(){
        console.log()
       props.returnValue(props.Item, props.Item.id)
    }

    return(
        <div style={{display:'flex'}}>
            {props.type == 'add'? 
                <AddIcon
                    onClick={clickIcon}
                    style={{ marginLeft:'0rem', color:'gray', cursor:'pointer'}} /> : 
                <RemoveIcon 
                    onClick={clickIcon}
                    style={{ marginLeft:'0rem', color:'gray', cursor:'pointer'}} /> }
            <Button 
                variant='contained' 
                style={{width:'8rem'}}
                disabled={props.visiblity}>{props.Item.name}</Button> 
        </div>
    )

}
export default Btn;