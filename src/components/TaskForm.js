import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SingleTextInput from './SingleTextInput';
import MultiTextInput from './MultiTextInput';
import FrequencyPicker from './FrequencyPicker';


const TaskForm = ({ 
    containerStyle, nameValue, summaryValue, 
    onChangeName, onChangeSummary, onChangeFrequency, 
    selectedFrequency }) => {

    return (
        <ScrollView style={containerStyle}>
            <SingleTextInput
                value={nameValue}
                onChangeText={onChangeName}
                label="Name:"
            />

            <MultiTextInput 
                value={summaryValue}
                onChangeText={onChangeSummary}
                label="Summary:"           
            />
            <FrequencyPicker
                label="Frequency"
                selectedFrequency={selectedFrequency}
                onChangeFrequency={onChangeFrequency}
            />
        </ScrollView>
    );
};


const styles = StyleSheet.create({

})
export default TaskForm;