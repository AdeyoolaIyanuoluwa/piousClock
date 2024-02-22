import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App/App";
import ReactDOM from "react-dom/client";
import ReactQueryProvider from "./App/QueryClient";
import { UserContextProvider } from "./context/userContexts";

const RootWrapper = ({ children }: any) => {
  return (
    <BrowserRouter>
      <ReactQueryProvider>
        <UserContextProvider>
          {children}
          <ToastContainer
            theme="colored"
            autoClose={3000}
            position="top-right"
          />
        </UserContextProvider>
      </ReactQueryProvider>
    </BrowserRouter>
  );
};

export { React, ReactDOM, App, RootWrapper };
