import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';

import { ListItemButton } from './ListItemButton';

class ListItem extends Component {
  state = {
    ride: true,
    show_riders: true
  }

  riderChoice = () => {
    if (this.state.ride === true) {
      this.props.ride({ destination: this.props.destination.destination, value: this.props.value, name: this.props.destination.name });
      this.setState({ ride: !this.state.ride });
    } else {
      this.props.unride({ destination: this.props.destination.destination, value: this.props.value, riderKey: this.props.rider.riderKey });
      this.setState({ ride: !this.state.ride });
    };
  }

  renderNames = () => {
    if (this.state.show_riders === false) {
      return (
        <View style={{ alignSelf: 'center' }}>
          <Text>{this.renderJoinedNames()}</Text>
        </View>
      );
    }
  }

  renderJoinedNames = () => {
    const riders = _.map(this.props.riders);
    const noRiders = 'No riders yet!'
    const names = [];

    if (_.isEmpty(riders)) {
      return noRiders;
    } else {
      _.forEach(riders, function(o, index) {
        names[index] = o.name;
      });
      return names.join(' - ');
    };
  }

  render() {
    return (
      <View style={styles.containerStyle}>

        <View style={styles.primaryContentStyle}>
          <View style={styles.secondaryContentStyle}>
            <Text style={[styles.primaryTextStyle, { marginBottom: 5 }]}>{this.props.first_name}</Text>
            <Text style={styles.secondaryTextStyle}>Seats left: {this.props.seats_left}</Text>
          </View>

          <View style={styles.secondaryContentStyle}>
            <View style={{ marginBottom: 5 }}>
              <ListItemButton
                onPress={this.riderChoice}
              >
                {this.state.ride ? "Ride" : "Unride"}
              </ListItemButton>
            </View>
            <ListItemButton
              onPress={() => {this.setState({ show_riders: !this.state.show_riders })}}
            >
              {this.state.show_riders ? "Show Riders" : "Unshow"}
            </ListItemButton>
          </View>
        </View>

        {this.renderNames()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    // maxHeight: 80,
    // minWidth: 215,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    height: 100,
    width: 300,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  primaryContentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  secondaryContentStyle: {
    flexDirection: 'column',
  },
  primaryTextStyle: {
    fontSize: 25,
    fontWeight: '300',
  },
  secondaryTextStyle: {
    fontSize: 16,
    fontStyle: 'italic'
  }
});

const mapStateToProps = ({ destination, rider }) => {
  destination.name = _.words(destination.name).shift();

  return { destination, rider };
};

export default connect(mapStateToProps, actions)(ListItem);
