import * as React from 'react';
import { SectionList, Image,
	TouchableOpacity, StyleSheet, Text,
	View, Dimensions, ScrollView } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import { Video } from 'expo-av';
import styles from '../../assets/styles/index.js';


const wellness = [
  {title: 'Emotional Health and Well-Being', url: 'http://martha.engr.scu.edu/MarthaLessons/emotional_health_and_wellbeing.pdf'},
  // {title: 'Health and Wellness', url: 'http://192.168.4.1/files/Disease_Prevention/Diabetes.pdf'},
];

// const physicalHealth = [
//   {title: 'COVID-19 Tips and Tricks', url: 'http://192.168.4.1/files/Disease_Prevention/Cholera_prevention.pdf'},
//   {title: 'Sexual Health and Puberty', url: 'http://192.168.4.1/files/Disease_Prevention/Diabetes.pdf'},
// ];

const PDF_DATA = [
  {title: 'Wellness', data: wellness},
  // {title: 'Physical Health', data: physicalHealth},
];

const {height, width} = Dimensions.get('window');

function SectionListPDFItems({ item, navigation }) {
	return (
		<View style={ styles.item }>
  		<TouchableOpacity
        style={ styles.listItem }
  			onPress={() => navigation.navigate('PDFScreen', { url: item.url })} >
        <Text style={ styles.listItemText }>{ item.title }</Text>
      </TouchableOpacity>
    </View>
	);
}

function FileScreen({ navigation }) {
	return (
		<View style={styles.pdf}>
			<View style={styles.rowContainer}>
    		<SectionList
          sections={PDF_DATA}
          keyExtractor={(item, index) => item + index}
				  renderItem={({ item }) => <SectionListPDFItems item={item} navigation={navigation}/>}
				  renderSectionHeader={({ section: { title } }) =>
          (<Text style={styles.sectionHeader}>{title}</Text>)}
				/>
      </View>
		</View>
	);
}

function PDFScreen({ route }) {
	const { url } = route.params;
  return (
		<View style={styles.pdf}>
			<PDFReader
				source={{
					uri: url
				}}
			/>
		</View>
	);
}