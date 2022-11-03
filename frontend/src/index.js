import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home/home';
import Create from './components/Create/create';
import Edit from './components/Edit/edit';
import View from './components/View/view';
import Add from './components/View/add';
import AddTools from './components/View/Addtools';
import Update from './components/View/Update';
import Overview from './components/View/Overview';
import Tasks from './components/View/Tasks'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewHome from './components/View/viewHome';
import Progress from './components/View/progress';

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App(){
      return(
        <BrowserRouter>
          <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/create' element={<Create/>} />
            <Route path = '/edit/:id' element={<Edit/>} />
            <Route path = '/show/:id' element={<View/>} > 
              <Route path = 'home' element = {<ViewHome/>}> 
                <Route path='overview' element={<Overview/>} />
                <Route path='tasks' element={<Tasks/>} />
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


