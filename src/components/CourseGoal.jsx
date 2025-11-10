import Button from "./Button";
import courseInfo from "../data/courseInfo";



// Componente CourseGoal

function CourseGoal({title, description}){

    function alertHeySend(){
        alert('Documentos enviados!')
    }    
 
    return (
             
    <div>
        <h2>{courseInfo.title}  </h2>
        <h3>{courseInfo.description} </h3>
        <Button functionForClick={alertHeySend}>Enviar</Button>  {/* Reutilizando o componente Button */}
    </div>);
}


export default CourseGoal;