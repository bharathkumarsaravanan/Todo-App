import React from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

function Index(){
    return(
        <div style={{display:'flex'}}>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Index;