import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
          <Text style={textStyle}>
            {children}
          </Text>

          <View>
            <View>
              <Button
                title="Yes"
                raised={true}
                fontSize={20}
                fontWeight="300"
                borderRadius={22}
                onPress={onAccept}
              />
            </View>

            <View style={{ marginTop: 20 }}>
              <Button
                title="No"
                raised={true}
                fontSize={20}
                fontWeight="300"
                borderRadius={22}
                onPress={onDecline}
              />
            </View>
          </View>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontWeight: '300',
    textAlign: 'center',
    color: 'white'
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'relative',
    flex: 1,
    justifyContent: 'space-around'
  }
});
