import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ListItemButton = ({ onPress, children }) => {
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
    height: 30,
    width: 125,
    justifyContent: 'center',
    backgroundColor: '#2667FF',
    borderRadius: 15,
    // borderWidth: 1,
    // borderColor: 'rgba(0,0,0,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 3
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white'
  }
});
