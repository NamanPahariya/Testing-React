import { createBrowserRouter, redirect } from "react-router";
import Contact from "./21 December/Contact";
import Career from "./21 December/Career";
import Dashboard from "./21 December/Dashboard";
import Profile from "./21 December/Profile";
import DashboardLayout from "./21 December/DashboardLayout";
import Blog from "./21 December/Blog";
import MainLayout from "./21 December/MainLayout";

// const navigate = useNavigate();
const protectedRoute = () =>{
    const isLoggedIn = true;
    if(!isLoggedIn){

        throw redirect('/')
        // navigate('/')
    } 
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Contact />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        loader:protectedRoute,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
    ],
  },
]);
