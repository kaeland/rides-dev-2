import React, { Component } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux';

//Action Creators
import { driverUpdate, driverCreate } from '../actions';

// Components
import { Icon, Button } from 'react-native-elements';
// import { Button } from '../components/Button';
import { Input } from '../components/Input';
import Header from '../components/Header';
import ChurchPicker from '../components/ChurchPicker';

class AddDriverScreen extends Component {
  static navigationOptions = {
    title: 'Add Driver',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="plus" type="font-awesome" color={tintColor}/>
    }
  }

  onButtonPress = () => {
    const { first_name, last_name, seats_left, destination } = this.props;

    this.props.driverCreate({ first_name, last_name, seats_left, destination: destination || 'Blueprint' });

    this.props.navigation.navigate('drivers');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation}/>

        <View style={styles.containerStyle}>
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>Add a new driver below...</Text>
          </View>
          <Input
            placeholder="First Name"
            value={this.props.first_name}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={value => this.props.driverUpdate({ prop: 'first_name', value })}
          />
          <Input
            placeholder="Last Name"
            value={this.props.last_name}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={value => this.props.driverUpdate({ prop: 'last_name', value })}
          />
          <Input
            placeholder="Seats Available"
            value={this.props.seats_left}
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={value => this.props.driverUpdate({ prop: 'seats_left', value })}
          />
          <ChurchPicker
            selectedValue={this.props.destination}
            onValueChange={value => this.props.driverUpdate({ prop: 'destination', value })}
          />
          {/* <Button onPress={this.onButtonPress}>
            Submit
          </Button> */}
          <Button
            title="Submit"
            raised={true}
            fontSize={20}
            fontWeight="300"
            backgroundColor="#2667FF"
            buttonStyle={{ marginBottom: 25, width: 290 }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around'
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300'
  },
  textViewStyle: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  }
});

const mapStateToProps = ({ driverForm }) => {
  const { first_name, last_name, seats_left, destination } = driverForm;

  return { first_name, last_name, seats_left, destination };
};

export default connect(mapStateToProps, { driverUpdate, driverCreate })(AddDriverScreen)
