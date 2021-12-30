import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { signOut } from '../firebase/authFirebase'

const Logout = () => {
    const navigate = useNavigate();
    useEffect(async () => {
        
    })
    return (
        <div>
            wyloguj
        </div>
    )
}

export default Logout
