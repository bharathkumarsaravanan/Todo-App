import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import View from './View/view';
import Overview from './View/viewRoutes/Overview';
import Packages from './View/viewRoutes/packages';
import Links from './View/viewRoutes/links';
import ViewHome from './View/viewHome';
import Progress from './View/progress';
import Tasks from './View/viewRoutes/Tasks';
import Features from './View/viewRoutes/features';
import { AnimatePresence } from "framer-motion";


function ViewPageRoutes(){
    
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path = '/show/:id' element={<View/>} > 
                    <Route path = 'home' element = {<ViewHome/>}> 
                        <Route path='overview' element={<Overview/>} />
                        <Route path='packages' element={<Packages/>} />
                        <Route path='taskItems' element={<Tasks/>} />
                        <Route path='features' element={<Features/>} />
                        <Route path='links' element={<Links/>} />
                    </Route>
                    <Route path='activities' element= {<Progress />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default ViewPageRoutes;