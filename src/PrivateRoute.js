import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import LoaderFullPage from './components/LoaderFullPage';

const PrivateRoute = ({ 
    children,
    forProtege = false,
 }) => {
const user = useSelector(({user}) => user)
const [isLogged, setIsLogged] = useState(null);
const [isProtege, setIsProtege] = useState(null);


useEffect(() => {
    if(user.userId !== null) setIsLogged(user.userId !== undefined);
    if(user.isProtege !== null) setIsProtege(user.isProtege ? true : false);
}, [user.userId, user.isProtege])

    if(isLogged == null || isProtege == null) {
        return <LoaderFullPage />
    } else {
        if(
            isLogged === false || 
            (isProtege === false && forProtege) || 
            (isProtege === true && !forProtege)
        ) return <Navigate to="/login" />
        return children
    }
}

export default PrivateRoute
