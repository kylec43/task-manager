import React, { useState, useContext } from 'react';
import { showAlert } from '../util/ShowAlert';
import { Context as TaskContext } from '../context/TaskContext';
import { useNavigation } from '@react-navigation/native';

const useTaskInput = () => {


    const [name, setName] = useState("");
    const [summary, setSummary] = useState("");
    const [selectedFrequency, setSelectedFrequency] = useState("daily");

    const navigation = useNavigation();

    const { addTask } = useContext(TaskContext);

    const saveTask = () => {
        if (name.length > 0) {
            addTask({
                name,
                summary
            });
            
            navigation.navigate("Home");
        } else {
            showAlert({
                title: "Attention",
                message: "Please enter a name for the task."
            });
        }
    };


    return { name, summary, selectedFrequency, setName, setSummary, setSelectedFrequency, saveTask };
};

export default useTaskInput;