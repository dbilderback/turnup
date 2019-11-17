import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import info from './info.json';

class TextModule extends Component {
  buttonPress() {
    return
  }

  renderSwitch(obj, i) {
    switch (obj.type) {
      case 'text':
        return <Text id={obj.id} style={obj.style} key={i}>{obj.content}</Text>
      case 'button':
        return <Button title={obj.title} onPress={this.buttonPress} key={i} />
      default:
        return null
    }
  }

  render() {
    return (
      <View className={info.container.class} style={info.container.style}>
        {info.page.map((obj, i) => this.renderSwitch(obj, i))}
      </View>
    )
  }
}

export default TextModule;
