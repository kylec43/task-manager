import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-elements';
import { Context as TaskContext } from '../context/TaskContext';

const TaskRow = ({ name, summary }) => {

    return (
        <>
            <View style={styles.row}>
                <Text>{name ? name : ""}</Text>
                <Text>{summary ? summary : ""}</Text>
            </View>
            <Divider color="rgba(0,0,0,0.1)" width={1.5} />
        </>
    );
};


const styles = StyleSheet.create({
    row: {
        height: 70
    },
    divider: {
        color: "red"
    }
});


export default TaskRow;