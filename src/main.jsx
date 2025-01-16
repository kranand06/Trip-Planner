import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Error404 from './Components/Error404.jsx'
import CreateTrip from './Components/CreateTrip.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './Components/viewtrip.jsx'
import Mytrip from './Components/mytrip.jsx'
import ProfilePage from './Components/profilrgpt.jsx'






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
        path: '/viewtrip/:tripId',
        element: <ViewTrip />,
      },
      {
        path: '/mytrips',
        element: <Mytrip />,
      },
      {
        path: '/myprofile',
        element: <ProfilePage />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
        <RouterProvider router={route} />
      </GoogleOAuthProvider>
  // </StrictMode>,
)
