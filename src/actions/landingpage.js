export const ONCHANGE_FULLNAME = 'ONCHANGE_FULLNAME';
export const updateFullName = (val) => ({
  type: ONCHANGE_FULLNAME,
  fullname: val
});

export const ONCHANGE_NEWROOMNAME = 'ONCHANGE_NEWROOMNAME';
export const updateNewRoomName = (val) => ({
  type: ONCHANGE_NEWROOMNAME,
  newroomname: val
});

export const ONCHANGE_CHATMESSAGE = 'ONCHANGE_CHATMESSAGE';
export const updateChatMessage = (val) => ({
  type: ONCHANGE_CHATMESSAGE,
  chatmessage: val
})