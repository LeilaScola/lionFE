import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles';

const TopicScreen = ({ navigation, route }) => {
    return (
    <View style={styles.homeContainer}>
      <Button style={styles.backButton} onPress={() => goBack()} title="Subject" />
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