import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '../src/reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState, useContext } from 'react';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ErrorPage from './components/ErrorPage';
import DescriptionPage from './pages/DescriptionPage';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Montserrat", sans-serif;
  }
`


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/descritpion",
    element: <DescriptionPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "description/:id",
    element: <DescriptionPage />,
    errorElement: <ErrorPage />
  }



])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
