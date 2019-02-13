import * as landingpage from '../actions/landingpage';
import faker from 'faker';

const initialState = {
  fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
  newroomname: '',
  chatmessage: '',
}

const landingpageReducer = (state=initialState, action) => {
  if (action.type === landingpage.ONCHANGE_FULLNAME) {
    return Object.assign({}, state, {
      fullname: action.fullname
    })
  }

  if (action.type === landingpage.ONCHANGE_NEWROOMNAME) {
    return Object.assign({}, state, {
      newroomname: action.newroomname
    })
  }

  if (action.type === landingpage.ONCHANGE_CHATMESSAGE) {
    return Object.assign({}, state, {
      chatmessage: action.chatmessage
    })
  }
  return state;
}

export default landingpageReducer;