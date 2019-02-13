import React from 'react';
import { updateNewRoomName } from "../actions/landingpage";
import { connect } from 'react-redux';
import { socket } from '../socket';

class CreateNewroom extends React.Component {
  roomnameChange(e) {
    return this.props.dispatch(updateNewRoomName(e.target.value));
  }
  createRoom(e) {
    e.preventDefault();
    console.log('form submitted' + this.props.newroomname);
    console.log(this.props.fullname);
    const joinnameObj = {
      roomname: this.props.newroomname,
      username: this.props.fullname,
    }
    socket.emit('join_room', joinnameObj);

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
  newroomname: state.main.newroomname,
  fullname: state.main.fullname
})

export default connect(mapStateToProps)(CreateNewroom);