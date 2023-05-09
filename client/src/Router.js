import { createBrowserRouter } from "react-router-dom";
import About from "./Components/about/About";
import Find from "./FindJob/Find";
import Requested from "./requetedjobs/Requested";
import NotFound from "./shared/NotFound";
import { Dashboard } from "./Components/Admin/Dashboard";
import { Homepage } from "./Components/Homepage";
import { Loginpage } from "./Components/Loginpage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "/Admin",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/account",
    element: <About />,
  },

  {
    path: "/find",
    element: <Find />,
  },

  {
    path: "/requested",
    element: <Requested />,
  },

  // {
  //   path: "/pop",
  //   element: <Pop />,
  // },

  {
    // Wild Card routes
    path: "*",
    element: <NotFound />,
  },
]);
