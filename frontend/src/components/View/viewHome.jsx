import React from "react";
import Lists from "./Lists";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function ViewHome(){ 

    const {id} = useParams();
    
    return(
        <motion.div className="viewPageBody">
            <Lists id={id} />
            <Outlet />
        </motion.div>
    )
}

export default ViewHome;