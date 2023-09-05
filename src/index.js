import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from '../src/reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import About from './pages/about/About';
import ErrorPage from './components/errorPage/ErrorPage';
import DescriptionPage from './pages/descriptionPage/DescriptionPage';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Montserrat", sans-serif;
  }
  body{
    margin: 0;
  }
`


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/descritpion",
    element: <DescriptionPage />,
  },
  {
    path: "description/:id",
    element: <DescriptionPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
    exact: true,
  },


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
