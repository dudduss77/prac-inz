import { useRoutes } from "react-router-dom";
import Theme from "./Theme";
import "./fontConfig";
import routes from "./routes";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserId, loadDataFromDb, selectUserId, selectUserType, setUserId } from "./features/UserSlice";
import Notification from "./components/Notification";
import { useEffect } from "react";
// import { auth, currentUser, getUserId } from "./firebase/authFirebase";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/authFirebase";
import { userDocRef } from "./firebase/dataFirebase";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const StyledApp = styled.div`
  color: ${({ theme }) => theme.CharacterPrimary};
  background: ${({ theme }) => theme.pageBackground};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

function App() {
  const userState = useSelector(selectUserType);
  const userId = useSelector(selectUserId)
  const userDispatch = useDispatch();
  // const [userId, setUserId] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        userDispatch(setUserId(user.uid))
      } else {
        userDispatch(setUserId(undefined))
      }
    })
  }, [auth, userDispatch])


  userDispatch(loadDataFromDb(userId))

  const routing = useRoutes(routes(false, userState));
  return (
    <StyledApp>
      <DndProvider backend={HTML5Backend}>
      <Theme>
        {routing}
        <Notification />
      </Theme>
      </DndProvider>
    </StyledApp>
  );
}

export default App;
