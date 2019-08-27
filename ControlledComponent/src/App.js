import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    something: ''
  }
  handleSomething = (val) =>{
    this.setState({something: val});

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
             type="text" 
             placeholder="Say Something" 
             value={this.state.something}
             onChange={(event) => this.handleSomething(event.target.value)}/>
          <p className="echo">Echo:</p>
          <p>{this.state.something}</p>
        </div>
      </div>
    );
  }
}

export default App;
