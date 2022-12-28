import React from "react";
import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

function Index(){
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Index;