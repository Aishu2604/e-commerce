import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ContextState from "./CONTEXT/ContextState";
import { AuthContextProvider } from "./LOGIN CONTEXT/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <ContextState>
        <App />
      </ContextState>
    </BrowserRouter>
  </AuthContextProvider>
);
