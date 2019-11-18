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

  switchNameHandler = () => {
    const newState = {... this.state}
    newState.persons[0].name = ':o Name has been changed'
    this.setState(newState);
  }

  render() {
    return (
      <div className="App"> 
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          InnerText!
        </Person>
      </div>
    );
  }
}

export default App;
