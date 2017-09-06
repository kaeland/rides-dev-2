import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Constants } from 'expo';
import _ from 'lodash';

import { driversFetch } from '../actions';

import Header from '../components/Header';
import { Icon, Button } from 'react-native-elements';
// import { Button } from '../components/Button';
import DriversList from '../components/DriversList';

class DriversListScreen extends Component {
  static navigationOptions = {
    title: 'Drivers',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="car" type="font-awesome" color={tintColor}/>
    }
  }

  componentWillMount() {
    this.props.driversFetch();
  }

  currentUserChurch = async () => {
    const token = await AsyncStorage.getItem('fb_token');
    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
  }

  render() {
    // Change the variable drivers to true
    const church = 'Gospel Hope';

    if (_.isEmpty(this.props.drivers)) {
      return (
        <View style={{ flex: 1 }}>
          <Header navigation={this.props.navigation}/>

          <View style={styles.containerStyleNoDriverList}>
            <View style={styles.textViewStyle}>
              <Text style={styles.textStyle}>
                Yikes, it looks like there are no drivers heading to {this.props.destination.destination || 'Blueprint'} this week.
                Check again in a little while, or add a new driver.
              </Text>
            </View>
            
            <Button
              title="Add New Driver"
              raised={true}
              fontSize={20}
              fontWeight="300"
              backgroundColor="#2667FF"
              buttonStyle={{ marginBottom: 25, width: 290 }}
              onPress={() => {this.props.navigation.navigate('add_driver')}}
            />
          </View>
        </View>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation}/>

        <View style={styles.containerStyleDriverList}>
          <Text style={styles.textStyle}>Drivers going to {this.props.destination.destination || 'Blueprint'} this week...</Text>
          <DriversList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyleDriverList: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight
  },
  containerStyleNoDriverList: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300'
  },
  textViewStyle: {
    // marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  }
});

const mapStateToProps = ({ drivers, destination }) => {
  return { drivers, destination };
};

export default connect(mapStateToProps, { driversFetch })(DriversListScreen);
