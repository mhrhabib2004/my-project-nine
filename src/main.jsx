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

      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
