import React, { Component } from 'react';


class Game extends Component {
    constructor(props){
        super(props)
        const valuesArray = this.makeNewQuestion();
        this.state={
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            proposedAnswer: valuesArray[3]
        }
    }

    makeNewQuestion = ()=> {
        // let valuesArray = new Array(4);
        const value1 = Math.floor(Math.random() * 100);
        const value2 = Math.floor(Math.random() * 100);
        const value3 = Math.floor(Math.random() * 100);
        const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);

        return [value1, value2, value3, proposedAnswer];
    }

    setNewQuestion = ()=>{
        const valuesArray = this.makeNewQuestion();
        this.setState({
            value1: valuesArray[0],
            value2: valuesArray[1],
            value3: valuesArray[2],
            proposedAnswer: valuesArray[3]
        }); 
    }
    handleClick = (event)=>{
        // this is very imp
        let answerisCorrect = this.evaluateAnswer(event);
        this.props.handleAnswers(answerisCorrect);
        this.setNewQuestion();

    }
    evaluateAnswer = (event)=>{
        let {value1, value2, value3, proposedAnswer} = this.state;
        let answerisCorrect = false;
        if(value1 + value2 + value3 == proposedAnswer && event.target.name == "true")
            return true;
        if(value1 + value2 + value3 != proposedAnswer && event.target.name == "false")
            return true;
        return false;
    }

    render(){
      return (
        <div className="game">
          <h3>Mental Math</h3>
            <div className="equation">
                <p className="text">{this.state.value1} + {this.state.value2} + {this.state.value3} = {this.state.proposedAnswer}</p>
            </div>
            <button name="true" onClick={this.handleClick}>True</button>
            <button name="false" onClick={this.handleClick}>False</button>
        </div>
    )}
    

}

export default Game;
