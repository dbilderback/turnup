import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Linking, Button } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import TextModule from './components/TextModule.js';
import SwipeCards from './components/SwipeCards.js';
import Footer from './components/Footer.js';
import Swiper from 'react-native-swiper';
import Event from './components/Event.js'
import Profilemodule from './components/Profilemodule.js';

Mapbox.setAccessToken('pk.eyJ1Ijoic3RlZmZlbnNvcm5wYW8iLCJhIjoiY2pnNnAzZmwyOGo4dzJxbXN3N2ZqNmVsNyJ9.IqeZUG-DDe9E4nTdZEZI9g');

export default class MainPage extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
      animate: new Animated.Value(1),
      index: 1,
      toggleCard: 1,
      user: undefined
    }
    this.shrinkFade = Animated.timing(
      this.state.animate,
      { toValue: 0, duration: 500 }
    )
    this.growFade = Animated.timing(
      this.state.animate,
      { toValue: 1, duration: 500 }
    )
    this.fadeOutHalf = Animated.timing(
      this.state.animate,
      { toValue: 0.8, duration: 100 }
    )
    this.fadeIn = Animated.timing(
      this.state.animate,
      { toValue: 1, duration: 100 }
    )
  }

  beginDrag = (e, state, context) => {
    if (this.state.toggleCard == 1 && state.index == 1) {
      this.fadeOutHalf.start()
    }
  }
  endDrag = (e, state, context) => {
    this.setState({ index: state.index })
    if (this.state.toggleCard == 0) {
      return
    } else {
      if (state.index !== 1) {
        this.shrinkFade.start();
      } else {
        this.growFade.start();
      }
    }
  }
  checkIndex = () => {
    if (this.state.toggleCard == 0) {
      return
    } else {
      setTimeout(() => {
        if (this.state.index == 1 && this.state.toggleCard == 1) {
          this.fadeIn.start()
        }
      }, 500)
    }
  }
  toggleCards = () => {
    if (this.state.toggleCard == 1) {
      this.setState({ toggleCard: 0 })
      this.shrinkFade.start()
    } else {
      this.setState({ toggleCard: 1 })
      this.growFade.start()
    }
  }

  render() {
    const { animate } = this.state
    const Animate = { transform: [{ scale: animate }], opacity: animate };
    return (
      <View style={styles.body}>
        <Swiper
          showsPagination={false}
          loop={false}
          index={1}
          onScrollBeginDrag={this.beginDrag}
          onMomentumScrollEnd={this.endDrag}
          onTouchEnd={this.checkIndex}>
          <View style={styles.slide}>
            <View style={styles.slideBody}>
              <Profilemodule />
            </View>
            <View style={styles.footer}>
              <Text style={styles.pageName}>Profile</Text>
            </View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slideBody}>
              <Mapbox.MapView style={styles.map}>
              </Mapbox.MapView>
            </View>
            <View style={styles.footer}>
              <Button
                style={styles.pageName}
                title="TurnUp"
                onPress={this.toggleCards}
              />
            </View>
          </View>
          <View style={styles.slide}>
            <View style={styles.slideBody}>
              <Event />
            </View>
            <View style={styles.footer}>
              <Text style={styles.pageName}>Event</Text>
            </View>
          </View>
        </Swiper>
        <Animated.View style={[styles.animated, Animate]}>
          <SwipeCards />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  slide: {
    flex: 9,
  },
  slideBody: {
    flex: 9,
  },
  map: {
    flex: 1
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  pageName: {
    fontSize: 50
  },
  animated: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
    height: "90%",
  }
});
