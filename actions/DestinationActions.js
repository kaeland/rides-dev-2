import firebase from 'firebase';
import { AsyncStorage } from 'react-native';
import {
  DESTINATION_UPDATE,
  DESTINATION_CREATE
} from './types';

export const destinationUpdate = ({ prop, value }) => {
  return {
    type: DESTINATION_UPDATE,
    payload: { prop, value }
  };
};

export const destinationCreate = ({ destination }) => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('fb_token');
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    const { id, name } = await response.json();
    firebase.database().ref(`/users/${id}`)
      .set({ name, destination })
      .then(() => {
        dispatch({ type: DESTINATION_CREATE, payload: { name, destination } });
      });
  };
};
