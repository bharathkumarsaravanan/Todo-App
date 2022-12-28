import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeRoutes from './components/HomeRoutes';
import ViewPageRoutes from './components/ViewPageRoutes';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleFeatureImage from './components/View/SingleFeatureImage';
import Login from './components/Authentication/Login';
import Splash from './components/Home/popups/splash';

const root = ReactDOM.createRoot(document.getElementById('root'));
const authentication = localStorage.getItem('login');
console.log(authentication)

export default function App(){
  
      return(
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            {authentication=='true'&&<Route path='/splash' element={<Splash/>} />}
          </Routes>
          {authentication=='true'&&<HomeRoutes />}
          {authentication=='true'&& <ViewPageRoutes/>}        
          <Routes>
            {authentication=='true'&&<Route path='/show/:id/featureimage/:featureid' element= {<SingleFeatureImage />} />}
          </Routes>
        </BrowserRouter>
      )
}

root.render(
    <App/>
);


