import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

const QrButton = () => {
    const goBarcode = () => {
        this.props.navigation.navigate('Second');
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={goBarcode}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>QR 스캔</Text>
            </View>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    button: {
        width: 75,
        height: 45,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#808000',
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF'
    }
})

export default QrButton

