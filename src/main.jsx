import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./context/modal.jsx";
import { CartProvider } from "./context/cart.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ModalProvider>
          <App />
        <Toaster />
      </ModalProvider>
    </CartProvider>
  </React.StrictMode>
);
