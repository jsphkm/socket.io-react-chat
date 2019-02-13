import React from 'react';
import "./styles.css";
import { connect } from 'react-redux';
import { updateFullName } from '../actions/landingpage';
import LandingRight from '../landing-right';
import CreateNewroom from '../create-newroom';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {roomname: ''};
  }
  changeInput(e) {
    return this.props.dispatch(updateFullName(e.target.value));
  }

  createRoom(e) {
    e.preventDefault();
    console.log(this.state.value);
  }

  roomnameChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <main className="landingpage-container">
        <a
        className="landingpage-header"
        href="https://github.com/jsphkm/socket.io-chat"
        rel="noopener noreferrer"
        target="_blank"
        >
          Socket.IO-Chat
        </a>
        <div className="landingpage-subcontainer">
          <div className="landingpage-left">
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