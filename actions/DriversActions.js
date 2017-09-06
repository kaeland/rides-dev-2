import firebase from 'firebase';
import { AsyncStorage } from 'react-native';

import { DRIVERS_FETCH_SUCCESS } from './types';

export const driversFetch = () => {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('fb_token');
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    const { id, name } = await response.json();
    firebase.database().ref(`/users/${id}/destination`)
      .on('value', (snapshot) => {
        firebase.database().ref(`/churches/${snapshot.val()}`)
        .on('value', snapshot => {
          dispatch({ type: DRIVERS_FETCH_SUCCESS, payload: snapshot.val() });
        });
      });
  };
};
