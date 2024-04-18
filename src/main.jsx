import React from 'react'
import ReactDOM from 'react-dom/client'
import 'animate.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Router from './Comonents/Router.jsx';
import UpdateProfile from './Comonents/UpdateProfile.jsx';
import Home from './Comonents/Home.jsx';
import Userprofile from './Comonents/Userprofile.jsx';
import Login from './Comonents/Login.jsx';
import Register from './Comonents/Register.jsx';
import AuthProvaider from './Provaider/AuthProvaider.jsx';
import ErrorPage from './Comonents/ErrorPage.jsx';
import PropertyShoing from './Comonents/PropertyShoing.jsx';
import PrivetRout from './Comonents/PrivetRout.jsx';
import { Helmet, HelmetProvider} from 'react-helmet-async';
import Team from './Comonents/Team.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children:[
      {
        path:"/",
        element: <Home></Home>,

      },
      {
        path:"/UpdateProfile",
        element:<PrivetRout><UpdateProfile></UpdateProfile></PrivetRout>,

      },
      {
        path:"/userprofile",
        element:<PrivetRout><Userprofile></Userprofile></PrivetRout>,

      },
      {
        path:"/Login",
        element:<Login></Login>,

      },
      {
        path:"/Register",
        element:<Register></Register>,

      },
      {
        path:"/errorPage",
        element:<ErrorPage></ErrorPage>,

      },
      {
        path:"/Team",
        element:<Team></Team>,

      },
      {
        path:"/propertyShowing/:id",
        loader:()=> fetch('/Data.json'),
        element: <PrivetRout><PropertyShoing></PropertyShoing></PrivetRout>,
      }
      
    
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
     <AuthProvaider>
      
     <RouterProvider router={router} />
     </AuthProvaider>
     </HelmetProvider>
  </React.StrictMode>,
)
