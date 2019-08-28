import React, { Component } from 'react';
import InputField from '../InputField';
import PropTypes from 'prop-types'
// import {style} from './index.scss';

class ChatWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
   


    render() {

         let { messages, user, updateMessages} = this.props;


        return (

          <div className="chat-window">
          <h2>Super Awesome Chat</h2>
          <div className="name sender">{user.username}</div>

          <ul className="message-list">
            {messages.map((message, index) => (
              <li
                key={index}
                className={
                  message.username === user.username ? 'message sender' : 'message recipient'
                }
              >
                <p>{`${message.username}: ${message.text}`}</p>
              </li>
            ))}
          </ul>
          <InputField updateMessages={this.props.updateMessages} user={user}/>

          
        </div>


        );
    }
}

ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired,

};

export default ChatWindow;
