

import './App.css'
import { useState } from 'react'

// Importando os componentes



import Button from './components/Button.jsx'
import Login from './components/Login.jsx'
import Discount from './components/Discount.jsx'
import Delete from './components/Delete.jsx'

// componentes para as rotas
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import RootLayout from './components/layouts/RootLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import Contacts from './pages/Contacts.jsx'
import FirstComponent from './components/FirstComponent.jsx'
import MainGoal from './components/MainGoal.jsx'
import CourseGoal from './components/CourseGoal.jsx'
import Courses from './pages/Courses.jsx'
import Courses2 from './pages/Courses2.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'

import ListaCompras from './components/ListaCompras.jsx'

// componente com a função no botão de mudar as disciplinas e suas descrições na página
import ReactSubject from './components/ReactSubject.jsx'
import PrendasNatal from './components/PrendasNatal.jsx'




// Dados e variáveis
const subjects = ["JS", "CSS", "React", "Base de Dados"];

function getRandomSubject(max) {
  return Math.floor(Math.random() * max);
}

let mySubject = subjects[getRandomSubject(4)];

let product = {
  name: 'caneta',
  price: 5,
  color: 'yellow'
};
//variaveis sem estado 
//let chosenSubject = "Escolha a matéria";

//estado do React - useState()

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/firstcomponent', element: <FirstComponent /> },
      { path: '/mainGoal', element: <MainGoal /> },
      { path: '/courseGoal', element: <CourseGoal /> },
      { path: '/reactSubject', element: <ReactSubject /> },
      { path: '/discount', element: <Discount /> },
      { path: '/delete', element: <Delete /> },
      { path: '/login', element: <Login /> },
      { path: '/courses', element: <Courses /> },
      { path: '/listaCompras', element: <ListaCompras /> },
      { path: '/prendasNatal', element: <PrendasNatal /> },
      /*{ path: '/courses2/:courses2_name', element: <Courses2 /> }*/
    ]
  }

]);


function App() {

  return <RouterProvider router={router} />





  const [chosenSubject, setChosenSubject] = useState('Escolha a matéria: ');
  //função para o botão submeter
  function alertPayDate() {
    alert('Atenção ainda faltam documentos para pagamento!')
  }

  //função que vai tomar conta do clique das matérias
  function getSubject(subject) {
    // alert("matéria completa de " + subject);
    setChosenSubject('A matéria é:' + subject);

  }
  return (
    <>


      













      <Button functionForClick={alertPayDate} >Submeter</Button>

      {/* CONTEÚDO DINAMICO - usando os mesmos botões criados anteriormente*/}

      <h3>Eventos Dinâmicos</h3>
      <menu>
        <Button functionForClick={() => getSubject("JS")}>Matéria JS</Button>
        <Button functionForClick={() => getSubject("React")}>Matéria React</Button>
        <Button functionForClick={() => getSubject("SQL")}>Matéria SQL</Button>
        <div>
          {chosenSubject}
        </div>
        <br />


      </menu>
      
    </>
  );
}

export default App;
