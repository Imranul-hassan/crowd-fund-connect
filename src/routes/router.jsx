

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
import CampaignDetails from "../pages/CampaignDetails";
import UpdateCampaign from "../pages/UpdateCampaign";

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/campaign')

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
          path: 'update-campaign/:id',
          element: <PrivateRoute>
                       <UpdateCampaign></UpdateCampaign>
                  </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
        
        },
        {
          path: 'campaign-details/:id',
          element: <PrivateRoute>
                       <CampaignDetails></CampaignDetails>
                  </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/campaign/${params.id}`)
        
        },
        {
          path: 'my-campaign/:user_email',
          element: <MyCampaign></MyCampaign>,
          loader: ({params}) => fetch(`http://localhost:5000/my-campaign/${params.user_email}`)
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