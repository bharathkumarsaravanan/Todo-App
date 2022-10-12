import React from "react";
import { useState } from "react";

function Select(props){
    var Items = props.Items;
    console.log(Items)

    console.log(props.selected)

   var selectedValue = props.selected;
    
 

    return(
        <select name={props.Boxname} onChange={props.selectValue} >
                {props.default&&<option disabled selected value> -- select an option -- </option>}
                {Items.map((language,index) => <option key={index} selected={selectedValue===language.id}  value={language.id} >{language.language}</option>)}    
            </select>
    )
}


export default Select;