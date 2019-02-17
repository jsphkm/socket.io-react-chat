import React from 'react';
// import { updateNewRoomName } from "../actions/landingpage";
import { connect } from 'react-redux';
// import { socket } from '../socket';
import * as actions from '../actions/socket.actions';

class CreateNewChannel extends React.Component {

  connectDefault(e) {
    return this.props.dispatch(actions.connectDefault());
  }

  connectNamespace(e) {
    return this.props.dispatch(actions.connectNamespace(
      {namespace: 'Foobar'}
    ));
  }
  
  render() {
    return (
      <div>
        <button onClick={this.connectDefault.bind(this)}>
          Connect to Default Namespace
        </button>
        <button onClick={this.connectNamespace.bind(this)}>
          Connect to Foobar Namespace
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newroomname: state.main.newroomname,
  fullname: state.main.fullname
})

export default connect(mapStateToProps)(CreateNewChannel);