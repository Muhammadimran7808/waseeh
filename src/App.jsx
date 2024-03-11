// import './App.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home'
// import CartPage from './pages/CartPage';

import Homepage from "./page/Home";

function App() {

    // const router = createBrowserRouter([
    //   {
    //     path: "/",
    //     element: <Home/>
    //   },
    //   {
    //     path: "/cart",
    //     element: <CartPage/>
    //   }
    // ])
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <Homepage />
    </>
  );
}

export default App
