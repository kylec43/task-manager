import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import SelectButton from './SelectButton';

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeekdaySelect = ({ selectedDays, onChange }) => {

    const [weekdayButtons, setWeekdayButtons] = useState([]);


    useEffect(() => {

        const newWeekdayButtons = weekdays.map((day, index) => {
            return (
                <SelectButton
                    label={day}
                    selected={selectedDays[index]}
                    id={index}
                    key={index}
                    onPress={(id) => {
                        if (!(selectedDays[id] && selectedDays.filter(selected => selected).length === 1)) {
                            const newSelectedDays = [...selectedDays];
                            newSelectedDays[id] = newSelectedDays[id] ? false : true;
                            onChange([...newSelectedDays]);
                        }
                    }}
                />
            );
        });
        setWeekdayButtons(newWeekdayButtons);

    }, [selectedDays]);

    return (
        <View style={styles.container}>
            {weekdayButtons}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        
    },
});


export default WeekdaySelect;