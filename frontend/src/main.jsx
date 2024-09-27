import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import Signup from './pages/Signup.jsx'
import Login from "./pages/Login.jsx"
import ForgotPassword from './pages/ForgotPassword.jsx'
import EditorPage from './pages/EditorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword/>
      },
      {
        path: "/editor/:projectId",
        element: <EditorPage/>
      },
      {
        path: "*",
        element: <NoPage/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
