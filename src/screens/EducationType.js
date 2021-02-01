import React, { Component } from 'react'
import { Image, View, TouchableOpacity, Button } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles/index.js';

const EducationScreen = ({ navigation, route }) => {
    return (
    <View style={styles.homeContainer}>
      <Button style={styles.backButton} title="Level of Education" />
        <View style={styles.homeHead}>
            <View style={styles.home}>
                Level {route.params.level}
            </View>
            <View style={styles.homeSub}>
                Choose type of education
            </View>
        </View>

        <View style={styles.homeBody}>
            <View style={styles.levelRow}> 
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Subjects', 
                            params: { education: 'General' },
                        })}>
                        <View style={styles.levelBody1}> </View>
                        <View style={styles.levelText}>
                            General Education
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Subjects', 
                            params: { education: 'Vocational' },
                        })}>
                        <View style={styles.levelBody2}> </View>
                        <View style={styles.levelText}>
                            Vocational Education
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Subjects', 
                            params: { education: 'Hygiene' },
                        })}>
                        <View style={styles.levelBody3}> </View>
                        <View style={styles.levelText}>
                            Hygiene Education
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Subjects', 
                            params: { education: 'Mental Health' },
                        })}>
                        <View style={styles.levelBody4}> </View>
                        <View style={styles.levelText}>
                            Mental Health Education
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}
                        onPress={() => navigation.navigate('HomeStackScreen', { 
                            screen: 'Subjects', 
                            params: { education: 'Physical' },
                        })}>
                        <View style={styles.levelBody5}> </View>
                        <View style={styles.levelText}>
                            Physical Education
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </View>
);
};

export default EducationScreen;