import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SingleTextInput from './SingleTextInput';
import MultiTextInput from './MultiTextInput';


const TaskForm = ({ containerStyle, nameValue, summaryValue, onChangeName, onChangeSummary }) => {

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
        </ScrollView>
    );
};


export default TaskForm;