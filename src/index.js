import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router=createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/contact',
    element:<Contact/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
