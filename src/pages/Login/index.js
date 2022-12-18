import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../contexts/authGoogle"
import './login.css'

export const Login = () => {
    const {signInGoogle, signed} = useContext(AuthGoogleContext)

    async function loginGoogle() {
        await signInGoogle();
    }

    if(!signed){
        return(
            <div className="container">
                <h2>Login com Google</h2>
                <button onClick={loginGoogle}>Logar com o Google</button>
            </div>
        ) 
    } else {
        return <Navigate to='/home' />
    }
}
