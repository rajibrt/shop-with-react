import logo from './logo.svg'
import './App.css'
import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Main from './layout/Main'
import Products from './components/Products/Products'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/home', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/products', element: <Products></Products> },
      ],
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
