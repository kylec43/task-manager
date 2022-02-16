import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Text, FAB } from 'react-native-elements';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import TaskRow from '../components/taskRow';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={styles.mainView}>
            <ScrollView>
                {new Array(20).fill(<TaskRow key={new Date().getTime()} />)}
            </ScrollView>
            <TouchableOpacity 
                style={[styles.floatingButton, styles.elevate]}
                onPress={() => navigation.navigate("CreateTask")}
            >
                <Text><FA5 name="plus" size={25} color="white" /></Text>
            </TouchableOpacity>
        </View>
    );

};


const styles = StyleSheet.create({
    floatingButton: {
        position: "absolute",
        bottom: 45,
        right: 40,
        backgroundColor: "#0295d8",
        width: 60,
        height: 60,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
    },

    mainView: {
        flex: 1,
        flexDirection: "column",
    },

    elevate: {
        elevation: 5
    },
});


export default HomeScreen;