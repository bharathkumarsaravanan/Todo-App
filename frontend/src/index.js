import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home/home';
import Create from './components/Create/create';
import Edit from './components/Edit/edit';
import View from './components/View/view';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

export default function App(){
      return(
        <BrowserRouter>
          <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/create' element={<Create/>} />
            <Route path = '/edit/:id' element={<Edit/>} />
            <Route path = '/view/:id' element={<View/>} />
          </Routes>
        </BrowserRouter>
      )
}

root.render(
  <App/>
);


