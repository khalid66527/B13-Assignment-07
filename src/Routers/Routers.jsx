import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";
import TimeLine from "../Pages/TimeLine/TimeLine";
import ActivityRing from "../UI/ActivityRing";

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
        element: <TimeLine></TimeLine>
      },
      {
        path: "/stats",
        element: <ActivityRing></ActivityRing>
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