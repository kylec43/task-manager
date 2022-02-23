import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-elements';

const TaskRow = ({ name, note, frequency, selectedWeekdays, calendarDay }) => {

    return (
        <>
            <View style={styles.row}>
                {name ? <Text>{ name }</Text> : null}
                {note ? <Text>{ note }</Text> : null}
                {frequency ? <Text>{ frequency }</Text> : null}
                {selectedWeekdays ? <Text>{ selectedWeekdays.toString() }</Text> : null}
                {calendarDay ? <Text>{ calendarDay }</Text> : null}
            </View>
            <Divider color="rgba(0,0,0,0.1)" width={1.5} />
        </>
    );
};


const styles = StyleSheet.create({
    row: {
        minHeight: 70,
    },
    divider: {
        color: "red"
    }
});


export default TaskRow;