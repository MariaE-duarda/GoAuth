import { useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import './home.css'

export const Home = () =>{
    const { user, signOut } = useContext(AuthGoogleContext)
    let userLogado = JSON.parse(user)
    console.log(userLogado)

    return (
    <div className="container">
        <h1>Bem vindo, {userLogado.displayName}!</h1>
        <label>Seu email: {userLogado.email}</label> <br/>
        <button onClick={() => signOut()}>Deslogar</button>
    </div>
  )
}
