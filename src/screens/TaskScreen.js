import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, FAB } from 'react-native-elements';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FloatingButton from '../components/FloatingButton';
import TaskRow from '../components/TaskRow';
import { Context as TaskContext } from '../context/TaskContext';
import { useFocusEffect } from '@react-navigation/native';

const TaskScreen = ({ navigation }) => {

    const { tasks, getTasks } = useContext(TaskContext);

    useFocusEffect(() => {
        getTasks();
    });

    return (
        <>
            <ScrollView>
                {tasks.map((task, index) => {
                    return (
                        <TaskRow
                            key={index}
                            name={task.name}
                            note={task.note}
                            frequency={task.frequency}
                            selectedWeekdays={task.selectedWeekdays}
                            calendarDay={task.calendarDay}
                        />
                    );
                })}
                {
                    tasks.length < 15 ? Array(15-tasks.length).fill(0).map((value, index) => {
                        return (
                            <TaskRow
                                key={index*15}
                            />
                        );
                    }) : null
                }
            </ScrollView>
            <FloatingButton 
                style={styles.floatingButton}
                onPress={() => navigation.navigate("CreateTask")}
                icon={<FA5 name="plus" size={25} color="white" />}
            />
        </>
    );

};


const styles = StyleSheet.create({
    floatingButton: {
        position: "absolute",
        bottom: 45,
        right: 40,
    },
});


export default TaskScreen;