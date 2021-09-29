import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, WebView, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function Barcode() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        Linking.openURL(data)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <View style={styles.container}>

                <View style={styles.barcodeWrap}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={styles.barcode}
                    />
                    {scanned && <Button title={'다시 스캔 하기'} onPress={() => setScanned(false)} />}
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    titleWrap: {
        display: 'flex',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey'
    },
    buttonWrap: {
        display: 'flex',
        marginTop: 20
    },
    barcode: {
        height: 400
    },
    barcodeWrap: {
        marginTop: 20
    }
});
