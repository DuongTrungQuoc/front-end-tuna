import { createBrowserRouter } from "react-router-dom";
import DefaultPage from "../pages/DefaultPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import User from "../pages/User.jsx";
import AdminHomePage from "../pages/AdminHomePage.jsx";
import ChatAI from "../pages/ChatAI.jsx";
import ChatDetail from "../pages/ChatDetail.jsx";
import GuestUser from "../pages/GuestUser.jsx";
import RGBPredict from "../pages/RGBPredict.jsx";
import LabPredict from "../pages/LabPredict.jsx";
import NotFound from "../pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
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
        path: "/user",
        element: <User />,
      },
      {
        path: "/guest",
        element: <GuestUser />,
      },
      {
        path: "/admin",
        element: <AdminHomePage />,
      },
      {
        path: "/rgb-predict",
        element: <RGBPredict />,
      },
      {
        path: "/lab-predict",
        element: <LabPredict />,
      },
    ],
  },
  {
    path: "/chat",
    element: <ChatAI />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/chat",
        element: <ChatDetail />,
      },
      {
        path: "/chat/:id",
        element: <ChatDetail />,
      },
    ],
  },
]);

export default router;
