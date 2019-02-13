import React from 'react';
import { connect } from 'react-redux';
import SendArrow from '../img/SendArrow';
import './styles.css';
import { socket } from '../socket';
import { updateChatMessage } from '../actions/landingpage';

class LandingRight extends React.Component {
  messagesubmit(e){
    e.preventDefault();
    console.log(e);
    socket.emit('chat message', this.props.main.chatmessage);
  }

  changeMessage(e) {
    return this.props.dispatch(updateChatMessage(e.target.value));
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
            onChange={this.changeMessage.bind(this)}
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

const mapStateToProps = state => ({
  chatmessage: state.main.chatmessage
})

export default connect(mapStateToProps)(LandingRight);