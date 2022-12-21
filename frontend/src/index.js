import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./components/Home/TasksPage/projectContainer";
import Projects from './components/Home/ProjectPage/Projects';
import HomeProgress from './components/Home/ProgressPage/progress';
import Profile from './components/Home/Settings/profile';
import Index from './components/Home/Index';
import View from './components/View/view';
import Overview from './components/View/viewRoutes/Overview';
import Packages from './components/View/viewRoutes/packages';
import Links from './components/View/viewRoutes/links';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewHome from './components/View/viewHome';
import Progress from './components/View/progress';
import Tasks from './components/View/viewRoutes/Tasks';
import Features from './components/View/viewRoutes/features';
import SingleFeatureImage from './components/View/SingleFeatureImage';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App(){
      return(
        <BrowserRouter>
          <Routes>
            <Route path = '/' element={<Index/>}>
              <Route path='home' Index element={<Home/>}/>
              <Route path='projects' element={<Projects/>}/>
              <Route path='progress' element={<HomeProgress/>}/>
              <Route path='settings' element={<Profile/>}/>
            </Route>
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
            <Route path='/show/:id/featureimage/:featureid' element= {<SingleFeatureImage />} />
          </Routes>
        </BrowserRouter>
      )
}

root.render(
    <App/>
);


