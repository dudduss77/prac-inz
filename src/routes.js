import Login from "./view/Login/Login";
import Layout from "./view/Layout/Layout";
import TrainerDashboard from "./view/TrainerDashboard/TrainerDashboard";
import DietCreator from "./view/DietCreator/DietCreator";
import { Navigate } from "react-router-dom";
import TempView from "./view/TempView";
import ErrorView from "./view/ErrorView";
import Chat from "./view/Chat/Chat";
import Browse from "./view/Browse/Browse";
import ProtegeView from "./view/Protege/ProtegeView";
import TrainerDiet from "./view/TrainerDiet";
import BrowseChat from "./view/Chat/BrowseChat";
import Calendar from "./view/Calendar/Calendar";

const routes = (auth, isProtege = false) => [
  { path: "*", element: <ErrorView /> },
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <TempView /> },
  { path: "/protegequestionnaire", element: <TempView /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: isProtege ? <TempView /> : <TrainerDashboard /> },
      {
        path: "/questionnaire",
        element: isProtege ? (
          <Navigate to="/protegequestionnaire" />
        ) : (
          <DietCreator />
        ),
      },
      {
        path: "/browse",
        element: isProtege ? <Navigate to="/" /> : <Browse />,
      },
      {
        path: "/calendar",
        element: isProtege ? <TempView /> : <Calendar />,
      },
      {
        path: "/training",
        element: isProtege ? <TempView /> : <DietCreator />,
      },
      { path: "/diet", element: isProtege ? <TempView /> : <TrainerDiet /> },
      { path: "/dietcreator", element: isProtege ? <TempView /> : <DietCreator /> },
      { path: "/dietcreator/:id", element: isProtege ? <TempView /> : <DietCreator isEdit={true}/> },
      {
        path: "/messages",
        element: isProtege ? <TempView /> : <BrowseChat />,
      },
      {
        path: "/message",
        element: isProtege ? <Chat isProtege /> : <Navigate to="/messages" />,
      },
      {
        path: "/message/:id",
        element: isProtege ? <Navigate to="/message" /> : <Chat />,
      },
      {
        path: "/history",
        element: isProtege ? <TempView /> : <Navigate to="/" />,
      },
      {
        path: "/protege/:id",
        element: isProtege ? <TempView /> : <ProtegeView />,
      },

      {
        path: "/authCheck",
        element: auth ? <DietCreator /> : <Navigate to="/login" />,
      },
    ],
  },
];

export default routes;
