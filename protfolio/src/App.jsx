import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './AppLayout'
import Home from './UI/we_Site/pages/Home'
import Projects from './UI/we_Site/pages/Projects'
import ProjectDetail from './UI/we_Site/pages/ProjectDetail'
import Admin from './UI/we_Site/pages/Admin'

function App() {

  const routes = createBrowserRouter([{
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/project/:id',
        element: <ProjectDetail />
      },
      {
        path: '/admin',
        element: <Admin />
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
