import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import LoaderFullPage from './components/LoaderFullPage';
import Layout from './view/Layout/Layout';

const PrivateRoute = ({ 
    children,
    forProtege = false,
    withoutLayout = false
 }) => {
const user = useSelector(({user}) => user)
const [isLogged, setIsLogged] = useState(null);
const [isProtege, setIsProtege] = useState(null);
const [isQuestionaireComplete, setIsQuestionaireComplete] = useState(null);

const location = useLocation();


useEffect(() => {
    if(user.userId !== null) setIsLogged(user.userId !== undefined);
    if(user.isProtege !== null) setIsProtege(user.isProtege ? true : false);
    if(user.isQuestionaireComplete !== null) setIsQuestionaireComplete(user.isQuestionaireComplete ? true : false);
}, [user.userId, user.isProtege, user.isQuestionaireComplete])

    if(isLogged == null || isProtege == null) {
        return <LoaderFullPage backgroundColor="#001628" />
    } else {
        if(isLogged === false) return <Navigate to="/login" />
        if(isProtege === false && forProtege) return <Navigate to="/trainer" />
        if(isProtege === true && forProtege && isQuestionaireComplete==false && location.pathname != "/protege/questionnaire") return <Navigate to="/protege/questionnaire" />
        if(isProtege === true && !forProtege) return <Navigate to="/protege" />
        return withoutLayout ? children : <Layout>{children}</Layout>
    }
}

export default PrivateRoute
