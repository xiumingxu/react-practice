import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [{username: 'Amy', text: 'hehe'}, ]
  };

  isDisabled = () => {
    return false;
  };
  updateMessages = (newMessage) => {
    //update message from parents

    // too disgusting

    this.setState(preState => {
      preState.messages.push(newMessage);
      return {messages: preState.messages};
    })

  }

  render() {
    // let {messages, users} = this.state;
    let users = this.state.users;
    let messages = this.state.messages;
    // alert(typeof []);
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header> */}
        <div className="container">
           {users.map(user=> <ChatWindow key={user.username} messages={messages} user={user} updateMessages={this.updateMessages}/>)}
        </div>
      </div>
        

          
          






          
    );
  }
}

export default App;
