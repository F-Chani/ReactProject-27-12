import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Meetings from './components/meetings/Meetings.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Login from './components/login/Login.jsx';
import Admin from './components/admin/Admin.jsx';
import User from './components/user/User'
import Services from './components/services/Services'
const router = createBrowserRouter([

  {
    path: '/',
    element: <User />,
    errorElement: <div>error App</div>,
  },
  {
    path: '/admin',
    element: <Admin/>,
    errorElement: <div>error Admin</div>,   
    children: [
      {
        path: 'services',
        element: <Services/>,
        errorElement: <div>error ServicesPopup not found</div>
      },
      {
        path: 'meetings',
        element:<Meetings/>,
        errorElement: <div>error meet not found</div>
        
      },
    ]
  }
])
console.log('send to meeting')
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)








