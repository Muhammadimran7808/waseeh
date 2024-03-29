import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage';
import CartPage from './pages/CartPage';
import FurniturePage from './pages/FurniturePage';


function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <CartPage/>
      },
      {
        path: "/collection/furniture",
        element: <FurniturePage/>
      }
    ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
