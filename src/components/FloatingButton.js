import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, FAB } from 'react-native-elements';
import FA5 from 'react-native-vector-icons/FontAwesome5';

const FloatingButton = ({ onPress, style, icon }) => {


    return (
        <TouchableOpacity 
            style={[styles.elevate, styles.floatingButton, style]}
            onPress={onPress}
        >
            <Text>{icon}</Text>
        </TouchableOpacity>
    );

};


const styles = StyleSheet.create({
    elevate: {
        elevation: 5
    },
    floatingButton: {
        backgroundColor: "#0295d8",
        width: 60,
        height: 60,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
    },
});



export default FloatingButton;