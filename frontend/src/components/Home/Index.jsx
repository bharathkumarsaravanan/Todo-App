import React from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

function Index(){
    return(
        <div style={{display:'flex', gap:'1rem'}}>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Index;