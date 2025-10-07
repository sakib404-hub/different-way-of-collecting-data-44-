import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router";
import Root from './Component/Root/Root.jsx';
import Form from './Component/Form/Form.jsx';
import DataCollectione from './Component/DataColleactionUsingE/DataCollectione.jsx';
import Home2 from './Component/Home2/Home2.jsx';
import ControlledDataCollection from './Component/ControlledDataCollection/ControlledDataCollection.jsx';
import Uncontrolled from './Component/UnControlled/Uncontrolled.jsx';

// creating the root 
const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home2
      },
      {
        path: '/dataCollectione',
        Component: Uncontrolled
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
)
