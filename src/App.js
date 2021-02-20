import { Component } from 'react';
import styled from 'styled-components'

import './App.css';
import Person from './Person/Person'

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {

  state = {
    persons : [
      {id: 'Person1', name: 'Max', age: 27 },
      {id: 'Person2', name: 'Olga', age: 30 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    })
    persons[personIndex].name = event.target.value;
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  togglePersonsHandler = (event) => {
      const newState = {...this.state}
      newState.showPersons = !this.state.showPersons;
      this.setState(newState)
  }

  render() {
    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              key={person.id}
            />
          })}
        </div>
      );
    }

    let classes = [];

    if(this.state.persons.length <= 1) {
      classes.push('red');
    }

    if(this.state.persons.length <= 0) {
      classes.push('bold');
    }

    return (
      <div className="App"> 
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toogle Persons</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
