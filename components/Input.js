import React from 'react';
import { TextInput, View, Text } from 'react-native';

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, onSubmitEditing }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      {/* <Text style={labelStyle}>{label}</Text> */}
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 10,
    fontSize: 18,
    lineHeight: 23
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.4)',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 20
  }
};
