import React from "react";
import { useState } from "react";

function Select(props){
    var Items = props.Items;
    console.log(Items)
    
 

    return(
        <select name={props.Boxname} onChange={props.selectValue}>
                 <option disabled selected value> -- select an option -- </option>
                {Items.map((language,index) => <option key={index} value={language.id}>{language.language}</option>)}    
            </select>
    )
}


export default Select;