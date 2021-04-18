import React, { Component } from 'react'
import { Image, View, TouchableOpacity, Button } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles/index.js';

const TopicScreen = ({ navigation, route }) => {
    return (
    <View style={styles.homeContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Subjects")}>
            <Text style={styles.backButtonText}>
                Subject
            </Text>        
        </TouchableOpacity>        
        <View style={styles.homeHead}>
            <Text style={styles.home}>
                {route.params.subject}
            </Text>
            <Text style={styles.homeSub}>
                Choose a Topic
            </Text>
        </View>
        <View style={styles.homeBody}>
          <View style={styles.levelRow}> 
            <View style={styles.topicButton}>
              <TouchableOpacity style={styles.topics} 
                onPress={() => navigation.navigate("pdf")}>
                        <Text style={styles.levelText}>
                            Emotional Health and Wellness
                        </Text>
                    </TouchableOpacity>
            </View>
          </View>
      </View>
    </View>
);
};

export default TopicScreen;