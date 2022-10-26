import React from "react";
import  ReactDOM  from "react-dom";

function options(){

    return ReactDOM.createPortal(
        <div className="newPortal">
            <div style={{display:'block',textAlign:"center",width:'90px',position:'fixed',marginLeft:'30rem',marginTop:'19.5rem'}}>
                <div style={{backgroundColor: 'white',padding:'5px'}}>delete</div>
                <div style={{backgroundColor: 'white',padding:'5px'}}>edit</div>
                <div style={{backgroundColor: 'white',padding:'5px'}}>view</div>
            </div>
        </div>, document.getElementById('portal')
    )

}

export default options;