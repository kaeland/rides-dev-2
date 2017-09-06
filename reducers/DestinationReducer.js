import {
  DESTINATION_UPDATE,
  DESTINATION_CREATE,
  DESTINATION_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  destination: '',
  name: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case DESTINATION_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DESTINATION_CREATE:
      return { destination: action.payload.destination, name: action.payload.name };
    case DESTINATION_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
