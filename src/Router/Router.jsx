import React from 'react';
import { createBrowserRouter } from 'react-router'; // Make sure it's 'react-router-dom', not just 'react-router'
import Rootlayout from '../Rootlayout/Rootlayout';
import Home from '../Pages/Home';
 // Adjust the import path as needed

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />, // use 'element' with JSX
    children: [
      {
        index: true, // This automatically sets path to '/'
        element: <Home />
      }
    ]
  }
]);

export default Router;
