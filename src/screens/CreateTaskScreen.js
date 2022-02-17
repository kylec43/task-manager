import React, { useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Text, Input } from 'react-native-elements';
import FloatingButton from '../components/FloatingButton';
import MultiTextInput from '../components/MultiTextInput';
import SingleTextInput from '../components/SingleTextInput';
import Spacer from '../components/Spacer';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import TaskForm from '../components/TaskForm';
import { Context as TaskContext } from '../context/TaskContext';

const CreateTaskScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [summary, setSummary] = useState("");

    const { addTask } = useContext(TaskContext);

    return (
        <>
            <TaskForm 
                containerStyle={styles.container}
                nameValue={name}
                summaryValue={summary}
                onChangeName={setName}
                onChangeSummary={setSummary}
            />
            <FloatingButton 
                style={styles.discardButton}
                icon={<FA name="close" size={25} color="white" />}
                onPress={() => {

                    Alert.alert(
                        "Confirmation",
                        "Are you sure you want to discard this task?",
                        [
                            {
                                text: "Cancel",
                                style: "cancel"
                            },
                            {
                                text: "Discard",
                                style: "default",
                                onPress: () => {
                                    navigation.navigate("Home");
                                }
                            }
                        ]
                    );
                }}
            />
            <FloatingButton 
                style={styles.acceptButton}
                icon={<FA5 name="check" size={25} color="white" />}
                onPress={() => {
                    addTask({
                        name,
                        summary
                    });
                    
                    navigation.navigate("Home");
                }}
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
    }
});


export default CreateTaskScreen;