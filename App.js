import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TaskScreen from './src/screens/TaskScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';
import TaskBrowserScreen from './src/screens/TaskBrowserScreen';
import { Provider as TaskProvider } from './src/context/TaskContext';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



const HomeFlow = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen options={{title: "Tasks"}} name="TaskScreen" component={TaskScreen} />
      <Drawer.Screen options={{ title: "Browser" }} name="TaskBrowser" component={TaskBrowserScreen} />
    </Drawer.Navigator>
  );
};


const StackNavigator = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="HomeFlow">
        <Stack.Screen options={{title: "Create Task"}} name="CreateTask" component={CreateTaskScreen} />
        <Stack.Screen options={{headerShown: false}} name="HomeFlow" component={HomeFlow} />
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