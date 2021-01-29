import React, { Component } from 'react'
import { SectionList, Image,
	TouchableOpacity, StyleSheet, Text,
    View, Dimensions, ScrollView } from 'react-native';
import styles from '../../assets/styles';

const AboutScreen = () => (
    <View style={styles.container}>
        <View style={styles.aboutHead}>
            {/* <View>
                <TouchableOpacity>Help</TouchableOpacity>
            </View> */}
            <Image 
                source={require('../../assets/logo.svg')}
                    style={styles.appLogo}/>
        </View>
        <View style={styles.aboutBody}>
            <Text style={styles.title}>
                About Martha
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget orci id diam gravida 
                viverra. Nullam sit amet nisl ut enim tristique luctus ut varius tortor. Morbi eget porta 
                lectus. Proin quis erat sed ante eleifend imperdiet sit amet sit amet mi. Sed consectetur, 
                erat eget molestie dignissim, neque nulla vestibulum mi, eu sagittis libero sem vitae diam. 
                Nulla aliquet neque velit, scelerisque laoreet nisi vulputate posuere. Nam vulputate eleifend 
                rtor, eu suscipit nibh tincidunt vitae. In a libero bibendum est porttitor tincidunt sit 
                amet lobortis libero. Maecenas ac vehicula tellus. Mauris vel maximus nisl.
                {"\n"}{"\n"}
                Fusce ante massa, vehicula sit amet quam consectetur, malesuada sodales nisl. Aenean ac 
                massa auctor, elementum massa vel, placerat erat. Aliquam auctor a velit vel egestas. Morbi 
                euismod sapien suscipit, blandit velit non, dictum enim. Aliquam fermentum tempor malesuada. 
                lentesque bibendum quis sem sit amet feugiat. Aliquam erat volutpat. Pellentesque condimentum 
                dapibus eros, non consectetur ipsum tincidunt eget.
                {"\n"}{"\n"}
                Donec id ornare massa. Morbi sed libero commodo, ullamcorper ante ac, porta nibh. Etiam 
                venenatis gravida ante fermentum placerat. Praesent porta, urna eget malesuada hendrerit, 
                elit turpis dapibus elit, sit amet sodales ligula nisl at lacus. Vivamus malesuada enim a 
                erat ultrices tincidunt a sit amet ligula. In venenatis porta enim id iaculis. Aliquam dui 
                tellus, luctus a iaculis vel, volutpat eu tellus. Curabitur sed malesuada nulla, eu euismod 
                turpis. Nunc mattis arcu vitae ipsum tincidunt gravida. Vivamus id accumsan massa. Nulla 
                placerat ex eu dolor efficitur euismod. Donec sit amet gravida mi, non iaculis ipsum. Maecenas 
                nisi ante, congue ac varius at, suscipit eu elit.
            </Text>
        </View>
    </View>
);

export default AboutScreen;