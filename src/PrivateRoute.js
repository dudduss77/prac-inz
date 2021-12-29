import { useState } from 'react'
import { Navigate } from 'react-router';
import LoaderFullPage from './components/LoaderFullPage';

const PrivateRoute = ({ 
    children,
    forProtege = false,
 }) => {
const [isLogged, setIsLogged] = useState(null);
const [isProtege, setIsProtege] = useState(null);
    return children;
    if(isLogged == null || isProtege == null) {
        return <LoaderFullPage />
    } else {
        if(isLogged === false) return <Navigate to="/login" />
        if(forProtege && isProtege == false) return <Navigate to="/login" />
        return children
    }
}

export default PrivateRoute
