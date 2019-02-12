import * as landingpage from '../actions/landingpage';
import faker from 'faker';

const initialState = {
  landingpage: {
    fullname: `${faker.name.firstName()} ${faker.name.lastName()}`
  },
}

const landingpageReducer = (state=initialState, action) => {
  if (action.type === landingpage.ONCHANGE_FULLNAME) {
    return Object.assign({}, state, {
      landingpage: {
        fullname: action.fullname
      }
    })
  }
  return state;
}

export default landingpageReducer;