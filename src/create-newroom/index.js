import React from 'react';
import { updateNewRoomName } from "../actions/landingpage";
import { connect } from 'react-redux';

class CreateNewroom extends React.Component {
  roomnameChange(e) {
    return this.props.dispatch(updateNewRoomName(e.target.value));
  }
  createRoom(e) {
    e.preventDefault();
    console.log('form submitted' + this.props.newroomname);
  }
  render() {
    return (
      <form onSubmit={this.createRoom.bind(this)}>
        <div className="newchannel-container">
          <input
          id="channelname-input"
          value={this.props.newroomname}
          onChange={this.roomnameChange.bind(this)}
          ></input>
          <button>Join</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  newroomname: state.main.newroomname
})

export default connect(mapStateToProps)(CreateNewroom);