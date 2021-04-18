import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Text } from 'react-native';
import styles from '../../assets/styles/index.js';
import { ScrollView, Alert, Buttons} from 'react-native';
import { TextInput } from 'react-native'
import { Linking } from 'react-native';

const HelpScreen = () => {
    return (
    <View style={styles.homeContainer}>
        <View style={styles.homeHead}>
            <View>
                <Text style={styles.home}>
                Help
                </Text>
            </View>
            <View>
                <Text  style={styles.homeSub}>
                Let us know if you have any questions,
                comments, or concerns
                </Text>
            </View>
        </View>

        <View style={styles.helpBody}>
            <View>
                <View style={styles.input}>
                    <View>
                        <Text>First Name</Text>
                    </View>
                    <TextInput style = {styles.textSearch}
                        underlineColorAndroid = "transparent"
                        placeholderTextColor = "grey"
                    />
                </View>

                <View style={styles.input}>
                    <View>
                        <Text>Last Name</Text>
                    </View>
                    <TextInput style = {styles.textSearch}
                        underlineColorAndroid = "transparent"
                        placeholderTextColor = "grey"
                    />
                </View>

                {/* <View>
                    <Text style={{alignSelf: "center", marginBottom: 5, fontSize: fontStyles.regularText}}>Filter By...</Text>
                        {/* <Picker 
                            selectedValue = {this.state.filter} 
                            onValueChange = {(itemValue, itemIndex) => this.setState({filter: itemValue})}
                            style={{ marginTop: 0}}
                            mode = {'dropdown'}
                            itemStyle={{fontSize: fontStyles.regularText}}>
                            <Picker.Item label = "Help" value = "help" />
                            <Picker.Item label = "Concern" value = "concern" />
                            <Picker.Item label = "Comment" value = "comment" />
                            <Picker.Item label = "Complaint" value = "complaint" />
                        </Picker> }
                </View> */}

                <View style={styles.input}>
                    <View>
                    <Text>Message</Text>
                    </View>
                    <TextInput style = {styles.textSearch}
                        underlineColorAndroid = "transparent"
                        placeholderTextColor = "grey"
                    />
                </View>
                

                <TouchableOpacity  
                    style = {styles.submitButton}
                    onPress = {() => this.sendEmail('sensibleappteam@gmail.com','MARTHA')}>
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
  );
};

export default HelpScreen;