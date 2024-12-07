
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
          loader: ()=> fetch('https://crowd-funding-server-rho.vercel.app/campaign')

        },
        {
          path: 'all-campaign',
          element: <AllCampaign></AllCampaign>,
          loader: ()=> fetch('https://crowd-funding-server-rho.vercel.app/campaign')
        },
        {
          path: 'add-new-campaign',
          element: <PrivateRoute>
                      <AddNewCampaign></AddNewCampaign>
                  </PrivateRoute>
        },
        {
          path: 'my-campaign/:user_email/update-campaign/:id',
          element: <PrivateRoute>
                       <UpdateCampaign></UpdateCampaign>
                  </PrivateRoute>,
          loader: ({params}) => fetch(`https://crowd-funding-server-rho.vercel.app/my-campaign/${params.user_email}/update-campaign/${params.id}`)
        
        },
        {
          path: 'campaign-details/:id',
          element: <PrivateRoute>
                       <CampaignDetails></CampaignDetails>
                  </PrivateRoute>,
          loader: ({params}) => fetch(`https://crowd-funding-server-rho.vercel.app/campaign/${params.id}`)
        
        },
        {
          path: 'my-campaign/:user_email',
          element: <PrivateRoute>
              <MyCampaign></MyCampaign>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://crowd-funding-server-rho.vercel.app/my-campaign/${params.user_email}`)
        },
        {
          path: 'my-donation/:user_email',
          element:<PrivateRoute>
                    <MyDonation></MyDonation>
                 </PrivateRoute>,
          loader: ({params})=> fetch(`https://crowd-funding-server-rho.vercel.app/my-donation/${params.user_email}`)
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