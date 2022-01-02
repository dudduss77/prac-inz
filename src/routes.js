import Login from "./view/Login/Login";
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
import TrainerTraining from "./view/TrainerTraining";
import TrainingCreator from "./view/TrainingCreator/TrainingCreator";
import ProtegeDiet from "./view/ProtegeDiet";
import ProtegeTraining from "./view/ProtegeTraining";
import ProtegeHistory from "./view/ProtegeHistory/ProtegeHistory";
import ProtegeDashboard from "./view/ProotegeDashboard/ProtegeDashboard";
import Questionnaire from "./view/Questionnaire/Questionnaire";
import QuestionnaireNew from "./view/Questionnaire/QuestionnaireNew";
import ProtegeQuestionnaire from "./view/Questionnaire/ProtegeQuestionnaire";
import PrivateRoute from "./PrivateRoute";
import Logout from "./view/Logout";



const routes = (auth, isProtege = false) => {

  return [
    { path: "*", element: <ErrorView /> },
    { path: "/login", element: <Login /> },
    { path: "/login/:id/:qustionaireId", element: <Login/> },
    { path: "/logout", element: <Logout /> },
    { path: "/protege/questionnaire", element: (
      <PrivateRoute forProtege withoutLayout>
        <ProtegeQuestionnaire />
      </PrivateRoute>
    ) },
    { 
      path: "/", 
      element: (
        <PrivateRoute >
          <Navigate to="/trainer/" />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/", 
      element: (
        <PrivateRoute>
          <TrainerDashboard />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/protege/", 
      element: (
        <PrivateRoute forProtege>
          <ProtegeDashboard />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/questionnaire", 
      element: (
        <PrivateRoute>
          <Questionnaire />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/questionnaire/new", 
      element: (
        <PrivateRoute>
          <QuestionnaireNew />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/questionnaire/edit/:id", 
      element: (
        <PrivateRoute>
          <QuestionnaireNew isEdit/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/browse", 
      element: (
        <PrivateRoute>
          <Browse />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/Calendar", 
      element: (
        <PrivateRoute>
          <Calendar />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/protege/Calendar", 
      element: (
        <PrivateRoute forProtege>
          <TempView />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/protege/training", 
      element: (
        <PrivateRoute forProtege>
          <ProtegeTraining />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/training", 
      element: (
        <PrivateRoute>
          <TrainerTraining />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/trainingcreator", 
      element: (
        <PrivateRoute>
          <TrainingCreator />
        </PrivateRoute>
      ) 
    },
    { 
      path: "trainer/trainingcreator/:id", 
      element: (
        <PrivateRoute>
          <TrainingCreator isEdit/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "trainer/trainingcreator/:id/:protegeId", 
      element: (
        <PrivateRoute>
          <TrainingCreator isEdit/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/diet", 
      element: (
        <PrivateRoute>
          <TrainerDiet />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/protege/diet", 
      element: (
        <PrivateRoute forProtege>
          <ProtegeDiet />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/dietcreator", 
      element: (
        <PrivateRoute>
          <DietCreator />
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/dietcreator/:id", 
      element: (
        <PrivateRoute>
          <DietCreator isEdit/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/dietcreator/:id/:protegeId", 
      element: (
        <PrivateRoute>
          <DietCreator isEdit/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/messages", 
      element: (
        <PrivateRoute>
          <BrowseChat/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "/protege/message/:id", 
      element: (
        <PrivateRoute forProtege>
          <Chat isProtege/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "/trainer/message/:id", 
      element: (
        <PrivateRoute>
          <Chat/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "/protege/history", 
      element: (
        <PrivateRoute forProtege>
          <ProtegeHistory/>
        </PrivateRoute>
      ) 
    },
    { 
      path: "trainer/protege/:id", 
      element: (
        <PrivateRoute>
          <ProtegeView/>
        </PrivateRoute>
      ) 
    },
    {
      path: "/authCheck",
      element: auth ? <DietCreator /> : <Navigate to="/login" />,
    },
  ];
}



export default routes;
