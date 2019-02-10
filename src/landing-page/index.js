import React from 'react';
import "./styles.css";
import { connect } from 'react-redux';
import { updateFullName } from '../actions/landingpage';
import SendArrow from '../img/SendArrow';


class LandingPage extends React.Component {
  changeInput(e) {
    return this.props.dispatch(updateFullName(e.target.value));
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
            <h1 className="landingpage-left-chatroom">
              Chatroom
            </h1>
            <input
              type="text"
              name="fullname"
              id="fullname-input"
              onChange={(e) => this.changeInput(e)}
              defaultValue={this.props.fullname}
              />
            <button type="submit" id="fullname-button">Enter</button>
          </div>
          <div className="landingpage-right">
            <div id="messages"></div>
            <div className="message-input-container">
              <input
                type="text"
                id="message-input"
                placeholder="Your message"
                rows="1"
              ></input>
              <button className="message-button" type="submit">
                {/* <div className="submit-arrow"></div> */}
                <SendArrow />
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  fullname: state.main.landingpage.fullname
})

export default connect(mapStateToProps)(LandingPage);