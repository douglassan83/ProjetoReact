/* import { useState } from 'react';
import Button from './Button';
import { EXAMPLES } from '../data/coreConcepts';

export default function ReactSubject() {
    const [description, setDescription] = useState('Escolha um tema:');

    function changeSubject(subject) {
        if (subject === 'JSX') setDescription(EXAMPLES.jsx.description);
        else if (subject === 'Props') setDescription(EXAMPLES.props.description);
        else if (subject === 'State') setDescription(EXAMPLES.state.description);
    }

    return (
        <div>
            <h3>Matéria de React</h3>
            <menu>
                <Button functionForClick={() => changeSubject('JSX')}>JSX</Button>
                <Button functionForClick={() => changeSubject('Props')}>Props</Button>
                <Button functionForClick={() => changeSubject('State')}>State</Button>
            </menu>
            <div>{description}</div>
        </div>
        
    );
}

>>>>>>>> resolução por parte da professora abaixo <<<<<<<<<<< 
 */






import { useState } from 'react';
import Button from './Button';
import { EXAMPLES } from '../data/coreConcepts';

export default function ReactSubject(){
    const[description, setDescription] = useState('components');

    function changeSubject(subject){
        setDescription(subject);
    }

    return(
        <div>
            <h3>Matéria de React</h3>
            <menu>
                <Button isActive={description == 'jsx'} functionForClick={() =>changeSubject('jsx')} >JSX</Button>
                <Button isActive={description == 'props'}functionForClick={() =>changeSubject('props')} >Props</Button>
                <Button isActive={description == 'state'}functionForClick={() =>changeSubject('state')} >State</Button>
            </menu>
            <div>
                <h4>{EXAMPLES[description].title}</h4>
                <p>{EXAMPLES[description].description}</p>
                
            </div>
        </div>
    )
}