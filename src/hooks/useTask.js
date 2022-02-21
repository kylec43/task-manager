import React, { useState, useContext } from 'react';
import { showAlert } from '../util/ShowAlert';
import { Context as TaskContext } from '../context/TaskContext';
import { useNavigation } from '@react-navigation/native';


const initialSelectedWeekdays = new Array(7).fill(false);
initialSelectedWeekdays[0] = true;

const useTaskInput = () => {


    const [name, setName] = useState("");
    const [summary, setSummary] = useState("");
    const [frequency, setFrequency] = useState("daily");
    const [selectedWeekdays, setSelectedWeekdays] = useState(initialSelectedWeekdays);
    const [calendarDay, setCalendarDay] = useState(new Date());

    
    const navigation = useNavigation();

    const { addTask } = useContext(TaskContext);

    const saveTask = () => {
        if (name.length > 0) {
            addTask({
                name,
                summary,
                frequency,
                selectedWeekdays,
                calendarDay
            });
            
            navigation.navigate("Home");
        } else {
            showAlert({
                title: "Attention",
                message: "Please enter a name for the task."
            });
        }
    };


    return { name, summary, frequency, calendarDay, selectedWeekdays, 
        setName, setSummary, setFrequency, setCalendarDay, setSelectedWeekdays, 
        saveTask 
    };
};

export default useTaskInput;