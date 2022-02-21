import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingButton from '../components/FloatingButton';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import TaskForm from '../components/TaskForm';
import { showConfirmation } from '../util/ShowAlert';
import useTask from '../hooks/useTask';

const CreateTaskScreen = ({ navigation }) => {

    const { 
        name, setName, 
        summary, setSummary, 
        frequency, setFrequency,
        selectedWeekdays, setSelectedWeekdays,
        calendarDay, setCalendarDay,
        saveTask
    } = useTask();

    return (
        <>
            <View>
                <TaskForm 
                    containerStyle={styles.container}
                    nameValue={name}
                    summaryValue={summary}
                    onChangeName={setName}
                    onChangeSummary={setSummary}
                    frequencyValue={frequency}
                    onChangeFrequency={(frequency) => {
                        setCalendarDay(new Date());
                        setFrequency(frequency);
                    }}
                    calendarDayValue={calendarDay}
                    selectedWeekdaysValue={selectedWeekdays}
                    onChangeCalendarDay={setCalendarDay}
                    onChangeSelectedWeekdays={setSelectedWeekdays}
                />
            </View>
            <FloatingButton 
                style={styles.discardButton}
                icon={<FA name="close" size={25} color="white" />}
                onPress={() => showConfirmation({
                    message: "Are you sure you want to discard this task?",
                    confirmText: "Discard",
                    onConfirm: () => navigation.navigate("Home")
                })}
            />
            <FloatingButton 
                style={styles.acceptButton}
                icon={<FA5 name="check" size={25} color="white" />}
                onPress={saveTask}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 32
    },
    acceptButton: {
        position: "absolute",
        bottom: 45,
        right: 40,
        backgroundColor: "green"
    },
    discardButton: {
        position: "absolute",
        bottom: 45,
        left: 40,
        backgroundColor: "red"
    },
});


export default CreateTaskScreen;