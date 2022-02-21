import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import FA from 'react-native-vector-icons/FontAwesome';

const CalendarDaySelect = ({ fromPresent=false, value=new Date(), onChange }) => {

    const [calendarVisible, setCalendarVisible] = useState(false);


    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => calendarVisible ? setCalendarVisible(false) : setCalendarVisible(true)}
                >
                    <View style={styles.dateContainer}>
                        <Text style={styles.date}>{value.toLocaleDateString()}</Text>
                        <FA name="calendar" size={35} />
                    </View>
                </TouchableOpacity>
                </View>
            { calendarVisible &&
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={({ nativeEvent: { timestamp }}) => {
                        setCalendarVisible(false);

                        if (timestamp) {
                            onChange(timestamp);
                        }
                    }}
                    minimumDate={fromPresent ? new Date() : null}
                />
            }
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "row"
    },
    dateContainer: {
        marginHorizontal: 8,
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: "rgba(0,0,0,0.5)",
        borderRadius: 15,
        padding: 8,
    },
    button: {
        color: "white",
    },
    date: {
        fontSize: 24,
        alignSelf: "flex-end",
        marginRight: 100,
    }
});


export default CalendarDaySelect;