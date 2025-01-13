import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Error404 from './Components/Error404.jsx'
import CreateTrip from './Components/CreateTrip.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';


const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/createtrip',
        element: <CreateTrip />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ]
  }
    ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <RouterProvider router={route} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
