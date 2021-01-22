import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles';

const HomeScreen = () => (
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
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody1}> </View>
                        <View style={styles.levelText}>
                            Level 1
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody2}> </View>
                        <View style={styles.levelText}>
                            Level 2
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody3}> </View>
                        <View style={styles.levelText}>
                            Level 3
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody4}> </View>
                        <View style={styles.levelText}>
                            Level 4
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody5}> </View>
                        <View style={styles.levelText}>
                            Level 5
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
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

export default HomeScreen;