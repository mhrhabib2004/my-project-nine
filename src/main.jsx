import React from 'react'
import ReactDOM from 'react-dom/client'

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children:[
      {
        path:"/Home",
        element: <Home></Home>,

      },
      {
        path:"/UpdateProfile",
        element:<UpdateProfile></UpdateProfile>,

      },
      {
        path:"/userprofile",
        element:<Userprofile></Userprofile>,

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
        path:"/propertyShowing/:id",
        loader:()=> fetch('/Data.json'),
        element: <PropertyShoing></PropertyShoing>
      }
      
    
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvaider>
     <RouterProvider router={router} />
     </AuthProvaider>
  </React.StrictMode>,
)
