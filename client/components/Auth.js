import React, { Component } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Auth extends Component {
  static navigationOptions = {
    header: null
  }
  constructor() {
    super();
    this._bootstrapAsync();
  }
  state = {
    user: undefined, // user has not logged in yet
    userToken: null,
  };


  _bootstrapAsync = async (value) => {
    try {
      await AsyncStorage.setItem('userToken', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  };

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentDidUpdate() {
    if (this.state.user) {
      this._bootstrapAsync(this.state.user)
      this.props.navigation.navigate('App');
    }
  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    console.log(user_string);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    });
  };

  // Handle Login with Google button tap
  loginWithGoogle = () => this.openURL('http://localhost:3000/auth/google');

  // Open URL in a browser
  openURL = (url) => {
    Linking.openURL(url);
  };

  render() {
    const { user } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {user
          ? // Show user info if already logged in
          <View style={styles.content}>
            <Text style={styles.header}>
              Welcome {user.name}!
            </Text>
            <View style={styles.avatar}>
              <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
            </View>
          </View>
          : // Show Please log in message if not logged in
          <View style={styles.content}>
            <Text style={styles.header}>
              Welcome Stranger!
            </Text>
            <Text style={styles.text}>
              Please login
            </Text>
            <Button
              title="Login with Google"
              onPress={this.loginWithGoogle}
              color="#DD4B39" />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    margin: 10,
  },
  text: {
    margin: 10
  },
});