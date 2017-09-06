import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, AsyncStorage } from 'react-native';
import { Constants } from 'expo';

import { Icon } from 'react-native-elements';
import { Confirm } from './Confirm';

export default class Header extends Component {
  state = { showModal: false };

  onAccept = () => {
    AsyncStorage.removeItem('fb_token');
    this.setState({ showModal: false });
    this.props.navigation.navigate('welcome');
  }

  onDecline = () => {
    this.setState({ showModal: false });
  }

  renderModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    console.log(this.props.navigation, 'header.js');
    const { contentViewStyle, viewStyle, textStyle, iconStyle } = styles;
    return (
      <View style={viewStyle}>
        <StatusBar
         barStyle="light-content"
        />
        <View>
          <Text style={textStyle}>Shepherd</Text>
        </View>
        <View style={{ marginRight: 10, marginLeft: 75 }}>
          <Icon
            name="launch"
            color="white"
            onPress={this.renderModal}
          />
        </View>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to logout of Shepherd?
        </Confirm>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#2667FF',
    height: 60,
    paddingTop: Constants.statusBarHeight,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // elevation: 2,
    // position: 'relative'
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
    fontWeight: '300'
  }
});
