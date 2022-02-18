import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingButton from '../components/FloatingButton';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import TaskForm from '../components/TaskForm';
import { Context as TaskContext } from '../context/TaskContext';
import { showConfirmation } from '../helpers/ShowAlert';

const CreateTaskScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [summary, setSummary] = useState("");
    const [selectedFrequency, setSelectedFrequency] = useState("daily");

    const { addTask } = useContext(TaskContext);

    return (
        <>
            <View>
                <TaskForm 
                    containerStyle={styles.container}
                    nameValue={name}
                    summaryValue={summary}
                    onChangeName={setName}
                    onChangeSummary={setSummary}
                    selectedFrequency={selectedFrequency}
                    onChangeFrequency={setSelectedFrequency}
                />
            </View>
            <FloatingButton 
                style={styles.discardButton}
                icon={<FA name="close" size={25} color="white" />}
                onPress={() => showConfirmation({
                    text: "Are you sure you want to discard this task?",
                    confirmText: "Discard",
                    onConfirm: () => navigation.navigate("Home")
                })}
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
    },
});


export default CreateTaskScreen;