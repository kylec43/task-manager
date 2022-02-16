import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Text } from 'react-native-elements';
import Spacer from './Spacer';

const MultiTextInput = ({ label, placeholder, text, onChangeText }) => {

    return (
        <>
            { label && <Text style={styles.label} h4>{label}</Text> }
            { label && <Spacer space={8} /> }
            
            <Input
                value={text}
                onChangeText={(value) => onChangeText(value)}
                multiline={true}
                numberOfLines={3}
                placeholder={placeholder ? placeholder : ""}
                style={styles.textArea}
                inputContainerStyle={styles.textAreaContainer}
            />            
        </>
    );

};


const styles = StyleSheet.create({
    textAreaContainer: {
        borderWidth: 2,
        borderBottomWidth: 2,
        padding: 8,
        borderColor: "rgba(0,0,0,0.4)",
        borderRadius: 10,
    },
    textArea: {
        textAlignVertical: "top",
        fontSize: 20,
    }
});


export default MultiTextInput;