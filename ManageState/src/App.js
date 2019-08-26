import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';




class App extends Component {

  state = {
    //  proposedAnswer : Math.floor(Math.random() * 3) + value1 + value2 + value3,
     numQuestions : 0,
     numCorrect : 0
  }
  handleAnswers = (answerisCorrect)=>{
    
    this.setState(preState=>(
      {numQuestions: preState.numQuestions+1}
    ))
    if(answerisCorrect){
      this.setState(preState=>{
        return {numCorrect: preState.numCorrect+1};
      })
    }
    console.log(this.state);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div>
          <Game handleAnswers={this.handleAnswers}/>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
