import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { driversFetch } from '../actions';

import ListItem from './ListItem';

class DriversList extends Component {
  componentWillMount() {
    this.props.driversFetch();
  }

  render() {
    const data = _.map(this.props.drivers)

    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={data}
          renderItem={({item}) =>
            <ListItem
              value={item.key}
              first_name={item.first_name}
              seats_left={item.seats_left}
              riders={item.riders}
            />
          }
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});

const mapStateToProps = ({ drivers }) => {
  return {drivers};
};

export default connect(mapStateToProps, { driversFetch })(DriversList);
