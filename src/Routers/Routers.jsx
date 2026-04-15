import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/timeline",
        element: "Timeline"
      },
      {
        path: "/stats",
        element: "Stats"
      },
      {
        path: "/friendDetails/:id",
        element:<FriendDetails></FriendDetails>
      }
      

    ],
    errorElement:<ErrorPage></ErrorPage>
  },


])

export default router;