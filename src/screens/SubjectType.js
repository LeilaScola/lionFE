import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles';

const SubjectScreen = ({ navigation, route }) => {
    return (
    <View style={styles.homeContainer}>
      <Button style={styles.backButton} onPress={() => goBack()} title="Type of Education" />
        <View style={styles.homeHead}>
            <View style={styles.home}>
                {route.params.education} Education
            </View>
            <View style={styles.homeSub}>
                Choose a Subject
            </View>
        </View>

        <View style={styles.homeBody}>
            <View style={styles.levelRow}> 
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody1}> </View>
                        <View style={styles.levelText}>
                            Math
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody2}> </View>
                        <View style={styles.levelText}>
                            Biology
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody3}> </View>
                        <View style={styles.levelText}>
                            Physics
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody4}> </View>
                        <View style={styles.levelText}>
                            Geology
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels}>
                        <View style={styles.levelBody5}> </View>
                        <View style={styles.levelText}>
                            Chemistry
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </View>
);
};

export default SubjectScreen;