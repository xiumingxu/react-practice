import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListCreation from './ListCreation'
import ListDisplay from './ListDisplay'

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>        
       
        <ListCreation />
        <ListDisplay items={this.state.items}/>

        
      </div>
    );
  }
}

export default App;
