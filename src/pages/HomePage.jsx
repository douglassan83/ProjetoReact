import { Link } from "react-router-dom"
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'



export default function HomePage() {

    return (
        <div className="div-HomePage">

            <h1 > REACT PROJECT</h1>

            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>



            {/* <a href="/contacts">Os meus contatos</a> */}
            {/*  <Link to="/contacts" >Os meus Contatos</Link>
        <Link to="/firstcomponent" > First Component</Link> */}
        </div>
    )
}