import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

export default class ChurchPicker extends Component {
  render() {
    return (
      <Picker
        // style={{ flex: 1 }}
        itemStyle={styles.pickerTextStyle}
        selectedValue={this.props.selectedValue}
        onValueChange={this.props.onValueChange}
      >
        <Picker.Item label="Blueprint" value="Blueprint"/>
        <Picker.Item label="Conerstone" value="Conerstone"/>
        <Picker.Item label="Gospel Hope" value="Gospel Hope"/>
        <Picker.Item label="Grace Midtown" value="Grace Midtown"/>
        <Picker.Item label="Passion City" value="Passion City"/>
        <Picker.Item label="Renovation" value="Renovation"/>
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 20,
  }
});
