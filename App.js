import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';
import { Provider as TaskProvider } from './src/context/TaskContext';

const Stack = createNativeStackNavigator();


const StackNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const App = () => {

  return (
    <TaskProvider>
      <StackNavigator />
    </TaskProvider>
  );

};


export default App;