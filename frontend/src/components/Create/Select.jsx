import React from "react";
import { useState } from "react";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
// import Select from '@mui/material/Select';


function SelectItem(props){
    var Items = props.Items;
    // console.log(Items)

    // console.log(props.selected)

   var selectedValue = props.selected;
    
 

    return(
        <div>
        {/* <Select  
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        onChange={props.selectValue}>
            {props.default&&<MenuItem disabled selected value> -- select an option -- </MenuItem>}
            {Items.map((language,index) => <MenuItem key={index} selected={selectedValue===language.id}  value={language.id} >{language.name}</MenuItem>)} 
        </Select> */}

        <select name={props.Boxname} onChange={props.selectValue} >
                {props.default&&<option disabled selected value> -- select an option -- </option>}
                {Items.map((language,index) => <option key={index}  value={language.id} >{language.name}</option>)}    
            </select>
        </div>
    )
}


export default SelectItem;