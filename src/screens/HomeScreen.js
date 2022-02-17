import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, FAB } from 'react-native-elements';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FloatingButton from '../components/FloatingButton';
import TaskRow from '../components/TaskRow';
import { Context as TaskContext } from '../context/TaskContext';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {

    const { tasks, getTasks } = useContext(TaskContext);
    console.log(tasks.length);
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
                            summary={task.summary}
                        />
                    );
                })}
                {
                    tasks.length < 15 ? Array(15-tasks.length).fill(0).map((value, index) => {
                        console.log(index);
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


export default HomeScreen;