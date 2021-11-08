import Login from "./view/Login";
import Layout from "./view/Layout";
import TrainerDashboard from "./view/TrainerDashboard";
import DietCreator from "./view/DietCreator";
import { Navigate } from "react-router-dom";

const routes = (auth) => [
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <TrainerDashboard /> },
      { path: "/dietcreator", element: <DietCreator /> },
      {
        path: "/authCheck",
        element: auth ? <DietCreator /> : <Navigate to="/login" />,
      },
    ],
  },
];

export default routes;
