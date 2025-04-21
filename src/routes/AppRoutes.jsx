import { createBrowserRouter } from "react-router-dom";
import { lazyLoad } from "../utils/lazyLoad.jsx";

// Lazy load all pages
const DefaultPage = lazyLoad(() => import("../pages/DefaultPage.jsx"));
const HomePage = lazyLoad(() => import("../pages/HomePage.jsx"));
const Login = lazyLoad(() => import("../pages/Login.jsx"));
const Register = lazyLoad(() => import("../pages/Register.jsx"));
const User = lazyLoad(() => import("../pages/User.jsx"));
const AdminHomePage = lazyLoad(() => import("../pages/AdminHomePage.jsx"));
const ChatAI = lazyLoad(() => import("../pages/ChatAI.jsx"));
const ChatDetail = lazyLoad(() => import("../pages/ChatDetail.jsx"));
const GuestUser = lazyLoad(() => import("../pages/GuestUser.jsx"));
const RGBPredict = lazyLoad(() => import("../pages/RGBPredict.jsx"));
const LabPredict = lazyLoad(() => import("../pages/LabPredict.jsx"));
const NotFound = lazyLoad(() => import("../pages/NotFound.jsx"));

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
