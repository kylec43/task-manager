import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';


const Spacer = ({ space }) => {

    return (
        <View style={{marginTop: space ? space : 24}} />
    );
};


const styles = StyleSheet.create({
    spacer: {
        marginTop: 8
    }
});


export default Spacer;