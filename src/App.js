import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons : [
      {name: 'Max', age: 27 },
      {name: 'Olga', age: 30 }
    ]
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

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App"> 
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={() => this.switchNameHandler(':o Name has changed')}
        >
          Switch Name
        </button>
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
}

export default App;
