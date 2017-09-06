import firebase from 'firebase';

import { RIDER_INCREMENT, RIDER_DECREMENT } from './types';

export const ride = ({ destination, value, name }) => {
  console.log({ destination, value }, 'ride action fired');
  return (dispatch) => {
    const riderKey = firebase.database().ref(`churches/${destination}/${value}/riders`).push().key;
    const ridersRef = firebase.database().ref(`churches/${destination}/${value}/riders/${riderKey}`);
    const seatsRef = firebase.database().ref(`churches/${destination}/${value}/seats_left`);
    seatsRef.transaction((seats_left) => {
      let newValue = seats_left - 1;
      if (newValue < 0) {
        return; // abort the transaction
      }
      return newValue;
    });
    
    ridersRef.set({ name });
    dispatch({ type: RIDER_DECREMENT, payload: riderKey });
  };
};

export const unride = ({ destination, value, riderKey }) => {
  console.log({ destination, value }, 'unride action fired');
  return (dispatch) => {
    console.log(riderKey, 'unride');
    const ridersRef = firebase.database().ref(`churches/${destination}/${value}/riders/${riderKey}`);
    const seatsRef = firebase.database().ref(`churches/${destination}/${value}/seats_left`);

    seatsRef.transaction((seats_left) => {
      let newValue = seats_left + 1;
      return newValue;
    });

    ridersRef.remove();
    dispatch({ type: RIDER_INCREMENT });
  };
};
