import { useDispatch } from "react-redux";
import { changeNotificationStateShow } from "../features/AppSlice";

const useNotification = () => {
    const dispatch = useDispatch();
    
    const show = (mess) => {
      dispatch(changeNotificationStateShow(mess));
    }
    
    const showError = (mess) => {
      dispatch(changeNotificationStateShow(mess));
    }
    
    const showWarning = (mess) => {
      dispatch(changeNotificationStateShow(mess));
    }
  
    return { show, showError, showWarning};
    
  }
  
  export { useNotification };