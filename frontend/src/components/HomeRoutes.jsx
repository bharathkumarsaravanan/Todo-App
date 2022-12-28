import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home/TasksPage/projectContainer";
import Projects from './Home/ProjectPage/Projects';
import HomeProgress from './Home/ProgressPage/progress';
import Profile from './User/userPage';
import Index from './Home/Index';
import { AnimatePresence } from "framer-motion";

function HomeRoutes(){

    const location = useLocation();
    
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path = '/index' element={<Index/>}>
                    <Route path='home' Index element={<Home/>}/>
                    <Route path='projects' element={<Projects/>}/>
                    <Route path='progress' element={<HomeProgress/>}/>
                    <Route path='settings' element={<Profile/>}/>
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default HomeRoutes;