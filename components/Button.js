import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    // flex:1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '400',
    paddingTop: 10,
    paddingBottom: 10
  }
});
