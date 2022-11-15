import React from "react";
import  ReactDOM  from "react-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function options(prop){

    var topMargin= prop.topAlign+13 + 'rem';
    // console.log(topMargin.toString());

    if(!prop.PopUp) return null

    return ReactDOM.createPortal(
        <motion.div 
            animate={{opacity:[0,1]}}
            transition={{duration:0.5}}
            className="newPortal" 
            onClick={() => {
                prop.setPopUp(!prop.PopUp) 
            } }>
            <motion.div 
                animate={{scale:[0,1.2,1]}}
                transition={{duration:0.5}}
                exit={{scale:0}}
                style={{display:'block',textAlign:"center",width:'90px',marginLeft:'50rem',marginTop:topMargin}}>
                <div className="options" onClick={()  => prop.removeFunction()}>delete</div>
                <div className="options">
                    <Link to={prop.viewPath} style={{textDecoration:'none',color:'black'}}>view</Link>
                </div>
            </motion.div>
        </motion.div>, document.getElementById('portal')
    )

}

export default options;