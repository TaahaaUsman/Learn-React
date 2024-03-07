import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import {Home, AboutUs, ContactUs,User, Github} from './Components/index'
import { githubInfo } from './Components/Github/Github'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <AboutUs />
      },
      {
        path: 'contact',
        element: <ContactUs />
      },
      {
        path: 'user/:userid',
        element: <User />
      },
      {
        loader: {githubInfo},
        path: 'github',
        element: <Github />
      }
    ]
  }
])

// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<AboutUs />} />
//       <Route path='contact' element={<ContactUs />} />
//     </Route>
//   )
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
