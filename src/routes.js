import Home from "./pages/home/home";

import DashBoard from "./pages/admin/dashBoard";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: false,
    component: Home
  }
];

const routesAdmin = [
  {
    path: "/admin/dashboard",
    exact: false,
    component: DashBoard
  }
];

export { routesHome, routesAdmin };
