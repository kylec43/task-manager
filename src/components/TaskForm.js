import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SingleTextInput from './SingleTextInput';
import MultiTextInput from './MultiTextInput';
import FrequencyPicker from './FrequencyPicker';
import WeekdaySelect from './WeekdaySelect';

const TaskForm = ({ 
    containerStyle, nameValue, summaryValue, 
    onChangeName, onChangeSummary, onChangeFrequency, 
    selectedFrequency }) => {

    return (
        <ScrollView style={containerStyle}>
            <SingleTextInput
                value={nameValue}
                onChangeText={onChangeName}
                label="Name *"
            />

            <MultiTextInput 
                value={summaryValue}
                onChangeText={onChangeSummary}
                label="Summary"           
            />
            <FrequencyPicker
                label="Frequency"
                selectedFrequency={selectedFrequency}
                onChangeFrequency={onChangeFrequency}
            />
            { selectedFrequency === "weekly" && <WeekdaySelect /> }
        </ScrollView>
    );
};


const styles = StyleSheet.create({

})
export default TaskForm;