import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles';

const HomeScreen = ({ navigation }) => {
    return (
    <View style={styles.homeContainer}>

        <View style={styles.homeHead}>
            <View style={styles.home}>
                Home
            </View>
            <View style={styles.homeSub}>
                Choose your level of education
            </View>
        </View>

        <View style={styles.homeBody}>
            <View style={styles.levelRow}> 
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Education', 
                            params: { level: '1' },
                        })}>
                        <View style={styles.levelBody1}> </View>
                        <View style={styles.levelText}>
                            Level 1
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Education', 
                            params: { level: '2' },
                        })}>
                        <View style={styles.levelBody2}> </View>
                        <View style={styles.levelText}>
                            Level 2
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Education', 
                            params: { level: '3' },
                        })}>
                        <View style={styles.levelBody3}> </View>
                        <View style={styles.levelText}>
                            Level 3
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Education', 
                            params: { level: '4' },
                        })}>
                        <View style={styles.levelBody4}> </View>
                        <View style={styles.levelText}>
                            Level 4
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Education', 
                            params: { level: '5' },
                        })}>
                        <View style={styles.levelBody5}> </View>
                        <View style={styles.levelText}>
                            Level 5
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Education', 
                            params: { level: '6' },
                        })}>
                        <View style={styles.levelBody6}> </View>
                        <View style={styles.levelText}>
                            Level 6
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
);
};

export default HomeScreen;