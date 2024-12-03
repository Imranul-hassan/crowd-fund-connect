

import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { Children } from "react";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path:"*",
      element:<Error></Error>
    }
  ])

  export default router