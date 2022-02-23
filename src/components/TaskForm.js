import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SingleTextInput from './SingleTextInput';
import MultiTextInput from './MultiTextInput';
import FrequencyPicker from './FrequencyPicker';
import WeekdaySelect from './WeekdaySelect';
import CalendarDaySelect from './CalendarDaySelect';

const TaskForm = ({ 
    containerStyle, nameValue, noteValue, frequencyValue,
    calendarDayValue, selectedWeekdaysValue,
    onChangeName, onChangeNote, onChangeFrequency, 
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
                value={noteValue}
                onChangeText={onChangeNote}
                label="Note"           
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