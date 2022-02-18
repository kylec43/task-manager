import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

const SelectButton = ({ label, selected, style, onPress, id }) => {

    return (
        <TouchableOpacity 
            style={[styles.button, selected ? styles.selectButton : null, style ]}
            onPress={() => onPress(id)}
        >
            <Text style={[ styles.text, selected ? styles.selectedText : null ]}>{label}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.5)"
    },
    selectButton: {
        backgroundColor: "#0295d8",
    },
    text: {
        fontWeight: "bold"
    },
    selectedText: {
        color: "white"
    }
});


export default SelectButton;