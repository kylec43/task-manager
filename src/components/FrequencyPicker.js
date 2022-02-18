import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer';

const FrequencyPicker = ({ selectedFrequency, onChangeFrequency, label }) => {

    return (
        <>

            { label && <Text style={styles.label} h4>{label}</Text> }
            { label && <Spacer space={8} /> }
            <View style={styles.container}>
                <Picker
                    selectedValue={selectedFrequency}
                    style={styles.picker}
                    onValueChange={onChangeFrequency}
                    itemStyle={styles.item}
                >
                    <Picker.Item label="Daily" value="daily" />
                    <Picker.Item label="Weekly" value="weekly" />
                    <Picker.Item label="Monthly" value="monthly" />
                    <Picker.Item label="Yearly" value="yearly" />
                </Picker>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    picker: {
        flexDirection: "row",
        flex: 1,
    },
    container: {
        borderWidth: 2,
        borderColor: "rgba(0,0,0,0.4)",
        marginHorizontal: 8,
        borderRadius: 10,
    },
    item: {
        fontWeight: "bold",
        fontSize: 25
    },
    label: {
        color: "rgba(0,0,0,0.6)",
        marginLeft: 8,
    }
});


export default FrequencyPicker;
