import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { destinationUpdate, destinationCreate } from '../actions';

import { Icon, Button } from 'react-native-elements';
import ChurchPicker from '../components/ChurchPicker';
// import { Button } from '../components/Button';
import Header from '../components/Header';

class DestinationScreen extends Component {
  static navigationOptions = {
    title: 'Destination',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="map-marker" type="font-awesome" color={tintColor}/>
    }
  }

  onButtonPress() {
    const { destination } = this.props;

    this.props.destinationCreate({ destination: destination || 'Blueprint' });

    this.props.navigation.navigate('drivers');
  }

  render() {
    console.log(this.props, 'destination')
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation}/>

        <View style={styles.containerStyle}>
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>Need a ride? Where would you like to go?</Text>
          </View>

          <View>
            <ChurchPicker
              selectedValue={this.props.destination}
              onValueChange={value => this.props.destinationUpdate({ prop: 'destination', value })}
            />
          </View>

          <Button
            title="Submit"
            raised={true}
            fontSize={20}
            fontWeight="300"
            backgroundColor="#2667FF"
            onPress={this.onButtonPress.bind(this)}
          />
        </View>
      </View>
    );
  }
}
//  Styles
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#F8F8F8'
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

const mapStateToProps = (state) => {
  const { destination } = state.destination;

  return { destination };
};

export default connect(mapStateToProps, { destinationUpdate, destinationCreate })(DestinationScreen);
