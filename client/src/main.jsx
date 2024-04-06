import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "./context/Auth.jsx";
// import { store } from "./app/store.js";
// import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  
);
