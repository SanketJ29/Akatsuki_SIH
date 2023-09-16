import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Register from "./pages/Register";
import APIPage from "./pages/APIPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/predict",
      element: <Predict />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/team",
      element: <Team />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/apipage",
      element: <APIPage />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
