import { RIDER_INCREMENT, RIDER_DECREMENT } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RIDER_INCREMENT:
      return INITIAL_STATE;
    case RIDER_DECREMENT:
      return { riderKey: action.payload };
    default:
      return state;
  };
};
