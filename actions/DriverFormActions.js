import firebase from 'firebase';
import {
  DRIVER_CREATE, DRIVER_UPDATE, DRIVER_SAVE_SUCCESS
} from './types';

export const driverUpdate = ({ prop, value }) => {
  return {
    type: DRIVER_UPDATE,
    payload: { prop, value }
  };
};

export const driverCreate = ({ first_name, last_name, seats_left, destination }) => {
  return (dispatch) => {
    const key = firebase.database().ref(`/${destination}`).push().key;
    firebase.database().ref(`/churches/${destination}/${key}`)
    .set({ first_name, last_name, seats_left, key })
    .then(() => {
      dispatch({ type: DRIVER_CREATE });
    });
  };
};








// export const userToDriver = () => {
//   return async (dispatch) => {
//     const token = await AsyncStorage.getItem('fb_token');
//     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//     const { id, name } = await response.json();
//     firebase.database().ref(`/users/${id}/destination`)
//       .once('value')
//       .then((snapshot) => {
//         let destination = snapshot.val()
//         let key = firebase.database().ref(`/${destination}`).push().key;
//         firebase.database().ref(`/churches/${destination}/${key}`)
//         .set{}
//       });
//   };
// };
