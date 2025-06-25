
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './UI/we_Site/pages/Home'

function App() {

  const routes = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
