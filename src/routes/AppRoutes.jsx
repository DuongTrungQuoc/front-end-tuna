import { createBrowserRouter } from "react-router-dom";
import { lazyLoad } from "../utils/lazyLoad.jsx";
import ProtectedAuth from "../components/Auth/ProtectedAuth.jsx";
import ProtectedRoute from "../components/Auth/ProtectedRoute.jsx";

// Lazy load all pages
const DefaultPage = lazyLoad(() => import("../pages/DefaultPage.jsx"));
const HomePage = lazyLoad(() => import("../pages/HomePage.jsx"));
const Login = lazyLoad(() => import("../pages/Login.jsx"));
const Register = lazyLoad(() => import("../pages/Register.jsx"));
const User = lazyLoad(() => import("../pages/User.jsx"));
const AdminLayout = lazyLoad(
  () => import("../components/Admin/AdminLayout.jsx"),
);
const Dashboard = lazyLoad(() => import("../pages/Admin/Dashboard.jsx"));
const UserManagement = lazyLoad(
  () => import("../pages/Admin/UserManagement.jsx"),
);
const ChatAI = lazyLoad(() => import("../pages/ChatAI.jsx"));
const ChatDetail = lazyLoad(() => import("../pages/ChatDetail.jsx"));
const GuestUser = lazyLoad(() => import("../pages/GuestUser.jsx"));
const RGBPredict = lazyLoad(() => import("../pages/RGBPredict.jsx"));
const LabPredict = lazyLoad(() => import("../pages/LabPredict.jsx"));
const ImgPredict = lazyLoad(() => import("../pages/ImagePrediction.jsx"));
const About = lazyLoad(() => import("../pages/About.jsx"));
const Activities = lazyLoad(() => import("../pages/Activities.jsx"));
const Contact = lazyLoad(() => import("../pages/Contact.jsx"));
const NotFound = lazyLoad(() => import("../pages/NotFound.jsx"));
const TermsAndConditions = lazyLoad(
  () => import("../pages/TermsAndConditions.jsx"),
);

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
        element: (
          <ProtectedAuth>
            <Login />
          </ProtectedAuth>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedAuth>
            <Register />
          </ProtectedAuth>
        ),
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
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
        path: "/rgb-predict",
        element: <RGBPredict />,
      },
      {
        path: "/lab-predict",
        element: <LabPredict />,
      },
      {
        path: "/img-predict",
        element: <ImgPredict />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/users",
        element: <UserManagement />,
      },
      {
        path: "/admin/predictions",
        element: <div>Predictions Management</div>,
      },
      {
        path: "/admin/reports",
        element: <div>Reports</div>,
      },
      {
        path: "/admin/customer-service",
        element: <div>Customer Service</div>,
      },
      {
        path: "/admin/settings",
        element: <div>Settings</div>,
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
