import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        zIndex: 2,
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: "80%",
        height: "80%",
        backgroundColor:"yellow",
        opacity: 0.8
    }
})

class EventCards extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.card}>
                    CARD
                </Text>
            </View>
        )
    }
}

export default EventCards;