import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

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
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler}/>
        </div>
      );
    }

    return (
      <div className={classes.App}> 
        <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} clicked={this.togglePersonsHandler} />

        {persons}
      </div>
    );
  }
}

export default App;
