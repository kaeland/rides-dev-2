import _ from 'lodash';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import { Button } from '../components/Button';
import Slides from '../components/Slides';

const SLIDE_DATA = [
 { text: 'Welcome to Shepherd', color: '#3F8EFC' },
 { text: 'Use this to find a ride to church', color: '#3B28CC' },
 { text: 'Select your driver, then ride on!', color: '#2667FF' }
];

export default class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('destination');
      // this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>
    );
  }
};
