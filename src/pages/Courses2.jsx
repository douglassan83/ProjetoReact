import { Link } from "react-router-dom"

export default function Courses2(){
     // vai a base de dados ,buscar toda a info do curso onde o user clicou: exemplo react
    return(
        <div>
        <h2> Página de cursos do Cesae 2 </h2>

        {/* //ciclo for que itera o array de cursos 
        // e para cada um mostra nome do curso, 
        // duração, regime e link para abrir uma 
        // nova página com toda a info do curso */}

        <Link> Aqui está a informação do curso </Link>
        <br />
        

        </div>


    )
}