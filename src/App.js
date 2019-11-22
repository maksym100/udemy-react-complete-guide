import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name: 'Max', age: 27 },
      {name: 'Olga', age: 30 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    const newState = {...this.state}
    newState.persons[0].name = newName
    this.setState(newState);
  }

  nameCHangedHandler = (event) => {
    const newState = {...this.state}
    newState.persons[0].name = event.target.value
    this.setState(newState);
  }

  togglePersonsHandler = (event) => {
      const newState = {...this.state}
      newState.showPersons = !this.state.showPersons;
      this.setState(newState)
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

let persons = null;
if(this.state.showPersons) {
  persons = (
    <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} 
            click={this.switchNameHandler.bind(this, ':o Other Name')}
            changed={this.nameCHangedHandler}
          />
          <Person
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}>
            InnerText!
          </Person>
        </div>
  );
}

    return (
      <div className="App"> 
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}
        >Toogle Persons</button>

        {persons}
      </div>
    );
  }
}

export default App;
