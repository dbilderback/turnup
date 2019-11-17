import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      instructions: "",
      description: "",
      tags: "",
      startTime: "",
      endTime: "",
      startDate: "",
      endDate: "",
      slots: "",
      cost: "",
      topic: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          onChange={(text) => this.setState({ name: text })}
          value={this.state.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={(text) => this.setState({ address: text })}
          value={this.state.address}
        />
        <View style={styles.multiContainer}>
          <TextInput
            style={styles.inputThird}
            placeholder="City"
            onChangeText={(text) => this.setState({ city: text })}
            value={this.state.city}
          />
          <TextInput
            style={styles.inputThird}
            placeholder="State"
            onChangeText={(text) => this.setState({ state: text })}
            value={this.state.state}
          />
          <TextInput
            style={styles.inputThird}
            placeholder="Zip"
            onChangeText={(text) => this.setState({ zip: text })}
            value={this.state.zip}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Additional Instructions"
          onChangeText={(text) => this.setState({ instructions: text })}
          value={this.state.instructions}
          multiline={true}
          numberOfLines={2}
          maxLength={100}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          onChangeText={(text) => this.setState({ description: text })}
          value={this.state.description}
          multiline={true}
          numberOfLines={4}
          maxLength={280}
        />
        <View style={styles.multiContainer}>
          <TextInput
            style={styles.inputHalf}
            placeholder="Start Time"
            onChangeText={(text) => this.setState({ startTime: text })}
            value={this.state.startTime}
          />
          <TextInput
            style={styles.inputHalf}
            placeholder="End Time"
            onChangeText={(text) => this.setState({ endTime: text })}
            value={this.state.endTime}
          />
        </View>
        <View style={styles.multiContainer}>
          <TextInput
            style={styles.inputHalf}
            placeholder="Start Date"
            onChangeText={(text) => this.setState({ startDate: text })}
            value={this.state.startDate}
          />
          <TextInput
            style={styles.inputHalf}
            placeholder="End Date"
            onChangeText={(text) => this.setState({ endDate: text })}
            value={this.state.endDate}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="RSVP Slots Available"
          onChangeText={(text) => this.setState({ slots: text })}
          value={this.state.slots}
        />
        <TextInput
          style={styles.input}
          placeholder="Cost"
          onChangeText={(text) => this.setState({ cost: text })}
          value={this.state.cost}
        />
        <Button style={styles.button} title="Submit" onPress={() => console.log("ok")} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: "#eee",
    borderWidth: 1,
    margin: 5
  },
  multiContainer: {
    flexDirection: "row"
  },
  inputThird: {
    height: 40,
    borderColor: "#eee",
    borderWidth: 1,
    margin: 5,
    flex: 0.333333
  },
  inputHalf: {
    height: 40,
    borderColor: "#eee",
    borderWidth: 1,
    margin: 5,
    flex: 0.5
  },
  button: {
    position: "absolute",
    bottom: 0
  }
});