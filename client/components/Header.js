import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 50
    }
})

class Header extends Component {
    render() {
        return (
            <Text style={styles.header}>
                Turn Up
            </Text>
        );
    }
}

export default Header;