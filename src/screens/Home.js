import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles/index.js';

const HomeScreen = ({ navigation }) => {
    return (
    <View style={styles.homeContainer}>

        <View style={styles.homeHead}>
            <Text style={styles.home}>
                Home
            </Text>
            <Text style={styles.homeSub}>
                Choose your level of education
            </Text>
        </View>

        <View style={styles.homeBody}>
            <View style={styles.levelRow}> 
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Education",  {level: "1"})}>
                        <View style={styles.levelBody1}></View>
                        <Text style={styles.levelText}>
                            Level 1
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Education",  {level: "2"})}>
                        <View style={styles.levelBody2}></View>
                        <Text style={styles.levelText}>
                            Level 2
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Education",  {level: "3"})}>
                        <View style={styles.levelBody3}></View>
                        <Text style={styles.levelText}>
                            Level 3
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Education",  {level: "4"})}>
                        <View style={styles.levelBody4}></View>
                        <Text style={styles.levelText}>
                            Level 4
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.levelRow}>
                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Education",  {level: "5"})}>
                        <View style={styles.levelBody5}></View>
                        <Text style={styles.levelText}>
                            Level 5
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.levelButton}>
                    <TouchableOpacity style={styles.levels} 
                        onPress={() => navigation.navigate("Education",  {level: "6"})}>
                        <View style={styles.levelBody6}></View>
                        <Text style={styles.levelText}>
                            Level 6
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
);
};

export default HomeScreen;