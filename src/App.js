import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons : [
      {name: 'Max', age: 27 },
      {name: 'Olga', age: 30 }
    ]
  });

  const [otherState, setOtherState] = useState('other value')

  const switchNameHandler = () => {
    const newState = {...personsState}
    newState.persons[0].name = ':o Name has been changed'
    setPersonsState(newState);
  }

    return (
      <div className="App"> 
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>
          InnerText!
        </Person>
      </div>
    );
}

export default app;
