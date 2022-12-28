import React from "react";

function SelectItem(props){

    var Items = props.Items;
    var selectedValue = props.selected;

    return(
        <div>
            <select name={props.Boxname} onChange={props.selectValue} >
                {props.default&&<option disabled selected value> -- select an option -- </option>}
                {Items.map((language,index) => <option key={index} selected={selectedValue===language.id}  value={language.id} >{language.name}</option>)}    
            </select>
        </div>
    )
}


export default SelectItem;