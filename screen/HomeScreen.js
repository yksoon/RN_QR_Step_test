import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, WebView, Linking, TouchableOpacity } from 'react-native';

import { Pedometer } from 'expo-sensors';

export default class HomeScreen extends Component {
    state = {
        isPedometerAvailable: 'checking',
        pastStepCount: 0,
        currentStepCount: 0,
    };

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps,
            });
        });

        Pedometer.isAvailableAsync().then(
            result => {
                this.setState({
                    isPedometerAvailable: String(result),
                });
            },
            error => {
                this.setState({
                    isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
                });
            }
        );

        const end = new Date();
        const start = new Date();

        let now = new Date();
        let nowYear = now.getFullYear();
        let nowMonth = now.getMonth();
        let nowDay = now.getDate();

        const newNow = new Date(nowYear, nowMonth, nowDay, 0);

        console.log(start);
        console.log(newNow);
        console.log(end);

        // start.setDate(end.getDate() - 1);
        // newNow.setDate(end.getDate() - 1);
        Pedometer.getStepCountAsync(newNow, end).then(
            result => {
                this.setState({ pastStepCount: result.steps });
            },
            error => {
                this.setState({
                    pastStepCount: 'Could not get stepCount: ' + error,
                });
            }
        );
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    goBarcode = () => {
        this.props.navigation.navigate('Second');
    }


    render() {
        return (
            <SafeAreaView>
                <StatusBar style="auto" />
                <View style={styles.container}>

                    <View style={styles.titleWrap}>
                        <Text style={styles.title}>QR스캔 테스트 앱</Text>
                    </View>

                    <View style={styles.buttonWrap}>
                        <TouchableOpacity activeOpacity={0.8} onPress={this.goBarcode}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>QR 스캔</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.stepWrap}>
                        <Text style={styles.howStep}>
                            오늘 하루 걸음 수 : <Text style={styles.pastStepCount}>{this.state.pastStepCount}</Text><Text style={styles.step}> 걸음</Text>
                        </Text>
                    </View>

                </View>
            </SafeAreaView>
        )
    }

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
    },
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
    },
    stepWrap: {
        marginTop: 45
    },
    howStep: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'skyblue'
    },
    step: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'lightgrey'
    },
    pastStepCount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});
