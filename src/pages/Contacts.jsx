import Card from "../components/Card"
import userData from "../data/userData"
import { Link } from "react-router-dom"

export default function Contacts() {
    return (
        <div>
            <h3 className="title-Card">Os meus contatos</h3>
            <div id="div-Card">
                <Card{...userData} />
                <Card firstName="Antonio" title="Gestor"  />
                <Card firstName="Maria" title="Gestora Pedagógica" />
            </div>
                        
        </div>
    )
}