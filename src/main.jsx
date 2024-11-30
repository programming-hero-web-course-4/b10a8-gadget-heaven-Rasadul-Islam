import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Root from './components/Root/Root.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard> ,
      },
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
