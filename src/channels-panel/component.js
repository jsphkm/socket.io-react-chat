import React from 'react';
import CreateNewChannel from '../create-newchannel/component';

const ChannelsPanel = () => {
  return (
    <div>
      <h1 className="landingpage-left-chatroom">
        Channels
      </h1>
      <CreateNewChannel />
  </div>
  )
};

export default ChannelsPanel;