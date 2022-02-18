import React from 'react';
import { StyleSheet, View } from 'react-native';
import useWeekdaySelect from '../hooks/useWeekdaySelect';


const WeekdaySelect = () => {

    const { buttons, selectedDays } = useWeekdaySelect();

    return (
        <>
            <View style={styles.container}>
                {buttons}
            </View>
        </>
        // <ButtonGroup
        //     buttons={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        //     selectMultiple
        //     selectedIndexes={[0]}
        //     containerStyle={styles.container}
        //     buttonStyle={styles.button}
        //     textStyle={{fontWeight: "bold"}}
        //     buttonContainerStyle={styles.buttonContainer}
        //     selectedButtonStyle={styles.selectedButton}
        // />
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