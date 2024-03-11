import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import CartPage from './pages/CartPage';

function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <CartPage/>
      }
    ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
