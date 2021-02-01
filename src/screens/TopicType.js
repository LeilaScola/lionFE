import React, { Component } from 'react'
import { Image, View, TouchableOpacity, Button } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles/index.js';

const TopicScreen = ({ navigation, route }) => {
    return (
    <View style={styles.homeContainer}>
      <Button style={styles.backButton} title="Subject" />
        <View style={styles.homeHead}>
            <View style={styles.home}>
                {route.params.subject}
            </View>
            <View style={styles.homeSub}>
                Choose a Topic
            </View>
        </View>
    </View>
);
};

export default TopicScreen;