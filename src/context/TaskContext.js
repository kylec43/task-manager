import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';


const reducer = (state, action) => {
    
    switch(action.type) {

        case "tasks:set":
            return {...state, tasks: action.payload};
        default:
            return state;
    }
};


const getTasks = (dispatch) => async () => {
    
    try {
        const tasksData = await AsyncStorage.getItem("@tasks");
        const tasks = tasksData ? JSON.parse(tasksData).tasks : null;
    
        if (tasks) {
            dispatch({ type: "tasks:set", payload: tasks });
        } else {
            console.log("File doesn't exist");
        }

    } catch (e) {
        console.log("Error reading file", e);
    }
};


const addTask = (dispatch) => async (newTask) => {


    try {        
        const tasksData = await AsyncStorage.getItem("@tasks");
        const tasks = tasksData ? JSON.parse(tasksData).tasks : [];

        newTask.calendarDay = newTask.calendarDay.getTime();
        tasks.push(newTask);

        await AsyncStorage.setItem("@tasks", JSON.stringify({ tasks }));

        
        dispatch({ type: "tasks:set", payload: tasks });
    } catch (e) {
        console.log("Error reading file", e);
    }

}



export const { Context, Provider } = createDataContext(
    reducer,
    {getTasks, addTask},
    {tasks: []}
);