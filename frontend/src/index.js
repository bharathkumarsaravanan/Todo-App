import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home/home';
import Edit from './components/Edit/edit';
import View from './components/View/view';
import Add from './components/View/add';
import AddTools from './components/View/Addtools';
import Update from './components/View/Update';
import Overview from './components/View/viewRoutes/Overview';
import Packages from './components/View/viewRoutes/packages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewHome from './components/View/viewHome';
import Progress from './components/View/progress';
import Tasks from './components/View/viewRoutes/Tasks';
import Features from './components/View/viewRoutes/features';
import Git from './components/View/viewRoutes/git';
import About from './components/View/viewRoutes/about';

import Nested from './components/NestedPractice/Nested';
import First from './components/NestedPractice/first';
import Sec from './components/NestedPractice/sec';
import Thir from './components/NestedPractice/third';
const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App(){
      return(
        <BrowserRouter>
          <Routes>
            <Route path = '/nestedroutes' element={<Nested />} >
              <Route path='first' element={<First />} />
              <Route path='sec' element={<Sec />} />
              <Route path='third' element={<Thir />} />
            </Route>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/edit/:id' element={<Edit/>} />
            <Route path = '/show/:id' element={<View/>} > 
              <Route path = 'home' element = {<ViewHome/>}> 
                <Route path='overview' element={<Overview/>} />
                <Route path='packages' element={<Packages/>} />
                <Route path='taskItems' element={<Tasks/>} />
                <Route path='features' element={<Features/>} />
                <Route path='github' element={<Git/>} />
                <Route path='about' element={<About/>} />
              </Route>
              <Route path='progress' element= {<Progress />} />
            </Route>
            <Route path = '/show/:id/add' element={<AddTools/>} />
            <Route path = '/show/:id/update/:listid' element={<Update/>} />
          </Routes>
        </BrowserRouter>
      )
}

root.render(
    <App/>
);


