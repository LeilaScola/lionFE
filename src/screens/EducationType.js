import React, { Component } from 'react'
import { Image, View, TouchableOpacity, Button, ScrollView } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles/index.js';

const EducationScreen = ({ navigation, route }) => {
    return (
    <ScrollView style={styles.homeContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.backButtonText}>
                Level of Education
            </Text>        
        </TouchableOpacity>
        <View style={styles.homeHead}>
            <Text style={styles.home}>
                Level {route.params.level}
            </Text>
            <Text style={styles.homeSub}>
                Choose type of education
            </Text>
        </View>

        <View style={styles.homeBody}>
            <View style={styles.levelRow}> 
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Subjects",  {education: "General"})}>
                        <View style={styles.levelBody1}></View>
                        <Text style={styles.levelText}>
                            General Education
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Subjects",  {education: "Vocational"})}>
                        <View style={styles.levelBody2}></View>
                        <Text style={styles.levelText}>
                            Vocational Education
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Subjects",  {education: "Hygiene"})}>
                        <View style={styles.levelBody3}></View>
                        <Text style={styles.levelText}>
                            Hygiene Education
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Subjects",  {education: "Mental Health"})}>
                        <View style={styles.levelBody4}></View>
                        <Text style={styles.levelText}>
                            Mental Health Education
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Subjects",  {education: "Physical"})}>
                        <View style={styles.levelBody5}></View>
                        <Text style={styles.levelText}>
                            Physical Education
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </ScrollView>
);
};

export default EducationScreen;