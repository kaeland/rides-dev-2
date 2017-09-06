import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <View style={{ marginTop: 30 }}>
          <Button
            title="Onwards!"
            raised
            fontSize={20}
            fontWeight="300"
            borderRadius={10}
            buttonStyle={styles.buttonStyle}
            onPress={this.props.onComplete}
          />
        </View>
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#3B28CC',
  }
};

export default Slides;
