import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input } from 'react-native-elements';
import MultiTextInput from '../components/MultiTextInput';
import SingleTextInput from '../components/SingleTextInput';
import Spacer from '../components/Spacer';


const CreateTaskScreen = () => {

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");

    return (
        <View style={styles.container}>
            <SingleTextInput
                text={text}
                onChangeText={setText}
                placeholder="Name"
            />


            <MultiTextInput 
                value={description}
                onChangeText={setDescription}
                placeholder="Description..."            
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 32
    },
});


export default CreateTaskScreen;