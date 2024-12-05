

import {createBrowserRouter} from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { Children } from "react";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllCampaign from "../pages/AllCampaign";
import AddNewCampaign from "../pages/AddNewCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import PrivateRoute from "./PrivateRoute";

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
          path: 'all-campaign',
          element: <AllCampaign></AllCampaign>,
          loader: ()=> fetch('http://localhost:5000/campaign')
        },
        {
          path: 'add-new-campaign',
          element: <PrivateRoute>
              <AddNewCampaign></AddNewCampaign>
          </PrivateRoute>
        },
        {
          path: 'my-campaign',
          element: <MyCampaign></MyCampaign>
        },
        {
          path: 'my-donation',
          element:<PrivateRoute>
              <MyDonation></MyDonation>
          </PrivateRoute>
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