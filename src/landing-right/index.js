import React from 'react';
import SendArrow from '../img/SendArrow';
import './styles.css';
import { socket } from '../socket';

class LandingRight extends React.Component {
  messagesubmit(e){
    e.preventDefault();
    console.log(e);
    // socket.emit('chat message', val);
  }

  render() {
    return (
      <div className="landingpage-right">
        <div id="messages"></div>
        <div className="message-input-container">
        <form onSubmit={(e) => this.messagesubmit(e)}>
          <input
            type="text"
            id="message-input"
            placeholder="Your message"
            rows="1"
            onChange={(e) => this.changeMessage(e)}
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