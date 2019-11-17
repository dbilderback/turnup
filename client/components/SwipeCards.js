'use strict';

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{ uri: this.props.image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.text}>
            Event: {this.props.name}{"\n"}
            Creator: {this.props.name}{"\n"}
            Address: {this.props.name}{"\n"}
            Description: {this.props.name}{"\n"}
            Time: {this.props.name}{"\n"}
            Slots left: {this.props.name}{"\n"}
            RSVPs: {this.props.name}{"\n"}
            Cost: {this.props.name}
          </Text>
        </View>
      </View>
    )
  }
}

class NoMoreCards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

const cards = [
  { name: '1', image: 'http://innovativetwist.com/wp-content/uploads/2015/12/AllBlackBackIG.jpg' },
  { name: '2', image: 'http://innovativetwist.com/wp-content/uploads/2015/12/KaraokeRetox.jpg' },
  { name: '3', image: 'http://innovativetwist.com/wp-content/uploads/2015/12/NightmareintheDMV.jpg' },
  { name: '4', image: 'http://flyertemplates.me/wp-content/uploads/2018/04/great-of-free-club-flyers-templates-flyer-psds-europe-tripsleep-co.jpg' },
  { name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif' },
  { name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif' },
  { name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif' },
  { name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif' },
  { name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif' },
]

const cards2 = [
  { name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif' },
  { name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif' },
  { name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif' },
  { name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif' },
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      outOfCards: false
    }
  }

  handleYup(card) {
    console.log("yup")
  }

  handleNope(card) {
    console.log("nope")
  }

  cardRemoved(index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.log(`Adding ${cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(cards2),
          outOfCards: true
        })
      }

    }

  }

  render() {
    return (
      <View style={styles.container}>
        <SwipeCards
          cards={this.state.cards}
          loop={false}

          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          showYup={true}
          showNope={true}

          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  card: {
    borderRadius: 5,
    backgroundColor: 'white',
    width: "100%",
    height: "95%"
  },
  cards: {
    height: "50%"
  },
  thumbnail: {
    width: 450,
    height: 300,
  },
  text: {
    fontSize: 20,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})