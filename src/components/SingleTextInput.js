import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text } from 'react-native-elements';
import Spacer from './Spacer';

const SingleTextInput = ({ label, placeholder, text, onChangeText }) => {

    return (
        <>
            { label && <Text style={styles.label} h4>{label}</Text> }
            { label && <Spacer space={8} /> }
            <Input
                value={text}
                onChangeText={(value) => onChangeText(value)}
                style={styles.input}
                placeholder={placeholder ? placeholder : ""}
                inputContainerStyle={styles.inputContainer}
            />            
        </>
    );

};


const styles = StyleSheet.create({
    label: {
        marginLeft: 8
    },
    input: {
        fontSize: 20,
    },
    inputContainer: {
        borderWidth: 2,
        borderBottomWidth: 2,
        padding: 8,
        borderColor: "rgba(0,0,0,0.4)",
        borderRadius: 10,
    },
});


export default SingleTextInput;