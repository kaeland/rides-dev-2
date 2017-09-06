import {
  DRIVER_UPDATE,
  DRIVER_CREATE,
  DRIVER_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  first_name: '',
  last_name: '',
  seats_left: '',
  destination: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case DRIVER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DRIVER_CREATE:
      return INITIAL_STATE;
    case DRIVER_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
