import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App/App";
import ReactDOM from "react-dom/client";

const RootWrapper = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <ToastContainer theme="colored" autoClose={3000} position="top-right" />
    </BrowserRouter>
  );
};

export { React, ReactDOM,App, RootWrapper };
