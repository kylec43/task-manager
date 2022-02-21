import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SingleTextInput from './SingleTextInput';
import MultiTextInput from './MultiTextInput';
import FrequencyPicker from './FrequencyPicker';
import WeekdaySelect from './WeekdaySelect';
import CalendarDaySelect from './CalendarDaySelect';

const TaskForm = ({ 
    containerStyle, nameValue, summaryValue, frequencyValue,
    calendarDayValue, selectedWeekdaysValue,
    onChangeName, onChangeSummary, onChangeFrequency, 
    onChangeCalendarDay, onChangeSelectedWeekdays
}) => {

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
                frequency={frequencyValue}
                onChangeFrequency={onChangeFrequency}
            />
            { frequencyValue === "weekly" && 
                <WeekdaySelect 
                    selectedDays={selectedWeekdaysValue} 
                    onChange={onChangeSelectedWeekdays} 
                /> 
            }
            { (frequencyValue === "monthly" || frequencyValue === "yearly") && 
                <CalendarDaySelect 
                    value={calendarDayValue} 
                    fromPresent 
                    onChange={onChangeCalendarDay} 
                /> 
            }

        </ScrollView>
    );
};


const styles = StyleSheet.create({

})
export default TaskForm;