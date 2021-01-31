import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles';

const EducationScreen = ({ navigation, route }) => {
    return (
    <View style={styles.homeContainer}>
      <Button style={styles.backButton} onPress={() => goBack()} title="Level of Education" />
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
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody1}> </View>
                        <View style={styles.levelText}>
                            General Education
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody2}> </View>
                        <View style={styles.levelText}>
                            Vocational Education
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody3}> </View>
                        <View style={styles.levelText}>
                            Hygiene Education
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody4}> </View>
                        <View style={styles.levelText}>
                            Mental Health Education
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
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