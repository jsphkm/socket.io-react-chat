import React from 'react';
import SendArrow from '../img/SendArrow';
import './styles.css';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8000');

class LandingRight extends React.Component {
  constructor(props) {
    super(props);
    socket.on('user_connect', (msg) => {
      console.log('append user has connected message');
    });
    socket.on('user_disconnect', (msg) => {
      console.log('append user has disconnected message');
    })
  }

  messagesubmit(e){
    e.preventDefault();
    console.log(e);
    // socket.emit('chat message', val);
  }

  userdisconnect(){
    socket.emit('join_room', 'this user has joined message thing');
  }

  render() {
    return (
      <div className="landingpage-right">
        <div id="messages"></div>
        <div className="message-input-container">
        <button onClick={() => this.userconnect()}>Connect</button>
        <button onClick={() => this.userdisconnect()}>Connect</button>
        <form onSubmit={(e) => this.messagesubmit(e)}>
          <input
            type="text"
            id="message-input"
            placeholder="Your message"
            rows="1"
            ></input>
          <button className="message-button" type="submit">
            <SendArrow />
          </button>
        </form>
        </div>
      </div>
    )
  }
}

export default LandingRight;