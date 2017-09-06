import React, { Component } from 'react';
import { Text, View, StylshSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { Button } from 'react-native-elements';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    // AsyncStorage.removeItem('fb_token');

    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('destination');
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button
          title="Woops!"
          onPress={() => this.props.navigation.navigate('welcome')}
        />
      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
};

export default connect(mapStateToProps, actions)(AuthScreen);
