import React, { Component } from 'react'
import { Image, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles/index.js';

const SubjectScreen = ({ navigation, route }) => {
    return (
    <ScrollView style={styles.homeContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Education")}>
            <Text style={styles.backButtonText}>
                Type of Education
            </Text>        
        </TouchableOpacity>        
        <View style={styles.homeHead}>
            <Text style={styles.home}>
                {route.params.education} Education
            </Text>
            <Text style={styles.homeSub}>
                Choose a Subject
            </Text>
        </View>

        <View style={styles.homeBody}>
            <View style={styles.levelRow}> 
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Topics",  {subject: "Mental Health and Wellness"})}>
                        <View style={styles.levelBody1}></View>
                        <Text style={styles.levelText}>
                            Mental Health and Wellness
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Topics",  {subject: "Physical Health"})}>
                        <View style={styles.levelBody2}></View>
                        <Text style={styles.levelText}>
                            Physical Health
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Topics",  {subject: "Physics"})}>
                        <View style={styles.levelBody3}></View>
                        <Text style={styles.levelText}>
                            Physics
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Topics",  {subject: "Geology"})}>
                        <View style={styles.levelBody4}></View>
                        <Text style={styles.levelText}>
                            Geology
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Topics",  {subject: "Chemistry"})}>
                        <View style={styles.levelBody5}></View>
                        <Text style={styles.levelText}>
                            Chemistry
                        </Text>
                    </TouchableOpacity>
                </View>
            </View> */}
        </View>

    </ScrollView>
);
};

export default SubjectScreen;