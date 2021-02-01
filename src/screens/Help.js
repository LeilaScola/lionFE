import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, Picker } from 'react-native';
import styles from '../../assets/styles/index.js';
import { ScrollView, Alert, Buttons} from 'react-native';
import { TextInput } from 'react-native'
import qs from 'qs';
import { Linking } from 'react-native';


// sendEmail = async(to, subject, body, options = {}) => {
//     const { cc, bcc } = options;

//     let url = `mailto:${to}`;

//     // Create email link query
//     const query = qs.stringify({
//         subject: subject,
//         body: body,
//         cc: cc,
//         bcc: bcc
//     });

//     if (query.length) {
//         url += `?${query}`;
//     }

//     // check if we can use this link
//     const canOpen = await Linking.canOpenURL(url);

//     if (!canOpen) {
//         throw new Error('Provided URL can not be handled');
//     }

//     return Linking.openURL(url);   
// }

const HelpScreen = () => {
    return (
    <View style={styles.homeContainer}>
        <View style={styles.homeHead}>
            <View style={styles.home}>
                Help
            </View>
            <View style={styles.homeSub}>
                Let us know if you have any questions,
                {"\n"}{"\n"}
                comments, or concerns
            </View>
        </View>

        <View style={styles.helpBody}>
            <View>
                <View style={styles.input}>
                    <View>
                        First Name
                    </View>
                    <TextInput style = {styles.textSearch}
                        underlineColorAndroid = "transparent"
                        placeholder = "Name..."
                        placeholderTextColor = "grey"
                    />
                </View>

                <View style={styles.input}>
                    <View>
                        Last Name
                    </View>
                    <TextInput style = {styles.textSearch}
                        underlineColorAndroid = "transparent"
                        placeholder = "Name..."
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
                        Message
                    </View>
                    <TextInput style = {styles.textSearch}
                        underlineColorAndroid = "transparent"
                        placeholder = "Name..."
                        placeholderTextColor = "grey"
                    />
                </View>
                

                <TouchableOpacity  
                    style = {styles.submitButton}
                    onPress = {() => this.sendEmail('sensibleappteam@gmail.com','Sensible App Comment')}>
                    <Text style = {styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
  );
};

export default HelpScreen;