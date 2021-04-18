import React, { Component } from 'react'
import { SectionList, Image,
	TouchableOpacity, StyleSheet, Text,
    View, Dimensions, ScrollView, Animated, Keyboard } from 'react-native';
import styles from '../../assets/styles/index.js';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function AboutScreen () {
    return (
    <ScrollView style={styles.aboutContainer}>
        <View style={styles.aboutHead}>
            {/* <View>
                <TouchableOpacity>Help</TouchableOpacity>
            </View> */}
            <Image 
                source={require('../../assets/logo(Big).png')}
                    style={styles.appLogo}/>
        </View>
        <View style={styles.aboutBody}>
            <Text style={styles.aboutTitle}>
                About Martha
            </Text>
            <Text>
            We believe education should be free and highly accessible. Since we have the means to provide to
            others, it is our duty as global citizens to push this mission forward. MARTHA is an affordable, sustainable, easy-to-use educational tool that can be
            utilized offline. 
            </Text>
        </View>
    </ScrollView>
  );
}


export default AboutScreen;