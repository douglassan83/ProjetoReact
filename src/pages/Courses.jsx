import { Link } from "react-router-dom"
import ComponentsCard from "../components/ComponentsCard"
import { CORE_CONCEPTS } from "../data/coreConcepts"

export default function Courses() {
    // vai a base de dados , tabela cursos, 
    // e traz todos os cursos inscritos na base 
    // de dados numa forma de array: curso = []
    return (
        <div>
            <h2> Página de cursos do Cesae</h2>

            {/* //ciclo for que itera o array de cursos 
        // e para cada um mostra nome do curso, 
        // duração, regime e link para abrir uma 
        // nova página com toda a info do curso */}


            <Link to="/Courses2/react">Curso </Link>
            <Link to="/Courses2/laravel">Curso </Link>
            <Link to="/Courses2/js">Curso </Link>
 
           <div className="container">
                {CORE_CONCEPTS.map((item) => 
                <ComponentsCard
                key={item.title}
                {...item} />
            
            )
                
                
                }
                   
                   

           </div>
        </div>


    )
}