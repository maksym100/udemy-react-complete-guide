import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person'

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
    let btnClasses = [classes.Button]
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
      btnClasses.push(classes.Red)
    }

    let assignedClasses = [];

    if(this.state.persons.length <= 1) {
      assignedClasses.push('red');
    }

    if(this.state.persons.length <= 0) {
      assignedClasses.push('bold');
    }

    return (
      <div className={classes.App}> 
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClasses.join(' ')}
          onClick={this.togglePersonsHandler}
        >Toogle Persons</button>

        {persons}
      </div>
    );
  }
}

export default App;
