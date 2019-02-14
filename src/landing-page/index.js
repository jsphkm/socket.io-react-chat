import React from 'react';
import "./styles.css";
import { connect } from 'react-redux';
import { updateFullName } from '../actions/landingpage';
import LandingRight from '../landing-right';
import CreateNewroom from '../create-newroom';
import { socket } from '../socket';

class LandingPage extends React.Component {
  componentDidMount() {
    socket.on('user_connect', (msg) => {
      console.log(`append user has connected message: ${msg}`);
    });

    socket.on('join_room', username => (
      console.log(`${username} should be added to the chat members list`)
    ))
  }

  componentWillUnmount() {
    socket.on('user_disconnect', (msg) => {
      console.log(`append user has disconnected message: ${msg}`);
    })
  }

  changeInput(e) {
    return this.props.dispatch(updateFullName(e.target.value));
  }

  render() {
    return (
      <main className="landingpage-container">
        <a
        className="landingpage-header"
        href="https://github.com/jsphkm/socket.io-react-chat"
        rel="noopener noreferrer"
        target="_blank"
        >
          Socket.IO-React-Chat
        </a>
        <div className="landingpage-subcontainer">
          <div className="landingpage-left">
            <label htmlFor="fullname-input">Your name</label>
            <input
              type="text"
              name="fullname"
              id="fullname-input"
              onChange={(e) => this.changeInput(e)}
              defaultValue={this.props.fullname}
              />
            <button type="submit" id="fullname-button">Enter</button>
            <h1 className="landingpage-left-chatroom">
              Chatrooms
            </h1>
            <CreateNewroom />
          </div>
          <LandingRight />
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  fullname: state.main.fullname
})

export default connect(mapStateToProps)(LandingPage);