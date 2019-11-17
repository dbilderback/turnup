import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    text: {
        fontSize: 50
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})

class Footer extends Component {
    render() {
        return (
            <Swiper
                showsPagination={false}
                loop={false}
                index={1}>
                <View style={styles.slide}>
                    <Text style={styles.text}>Profile</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Splash</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Event</Text>
                </View>
            </Swiper>
        );
    }
}

export default Footer;