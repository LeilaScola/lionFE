import { StyleSheet, Dimensions } from "react-native";

const PURPLE_TEXT = "#5341AF";
const DARK_TEXT = "#222151";
const WHITE = "#F9F9FB";
const OFF_WHITE = "#FFFFFF";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({

	// nav: {
	// 	alignItems: "center",
	// 	fontFamily: "Proxima Nova",
	// 	fontWeight: "bold",
	// 	fontSize: 20,
	// },

    // TAB NAVIGATION
    tabButton: {
		paddingTop: 20,
		paddingBottom: 30,
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},

    // SCREENS - ALL
	container: {
		display: "flex",
		flexDirection: "column",
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
		resizeMode: "cover",
		fontFamily: "Helvetica",
		width: "100%",
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
    },
    title: { 
		paddingBottom: 25, 
		fontWeight: "bold",
		fontSize: 36, 
		color: DARK_TEXT
	},

	//ABOUT PAGE
	aboutHead: {
		display: "flex",
		flexDirection: "column",
		paddingTop: 20,
		paddingBottom: "5%",
	},
	helpButton: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "right",
		alignItems: "right",
	},
	appLogo: {
		alignSelf: "center",
    	height: 125,
    	width: 125,
    	marginTop: "5%",
	},
	aboutBody: {
		display: "flex",
		border: "10% blue",
		paddingTop: "5%",
		paddingBottom: "5%",
		paddingRight: "5%",
		paddingLeft: "5%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		fontSize: 18,
		width: "70%",
		borderRadius: 10,
		shadowColor: '#9370DB',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 25,
		elevation: 2,
		color: DARK_TEXT,
	},

	//HOME SCREEN
	homeContainer: {
		padding: "5%",
		fontFamily: "Helvetica",
	},

	homeHead: {
		display: "flex",
		flexDirection: "column",
	},

	home: {
		fontSize: 38,
		fontWeight: "bold",
	},

	homeSub: {
		paddingTop: 5,
		fontSize: 15, 
		fontWeight: "bold",
		color: "#A593B2",
	},

	homeBody: {
		display: "flex",
		justifyContent: "space-evenly",
	},

	levels: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		fontSize: 18,
		width: "100%",
		borderRadius: 10,
		shadowColor: '#9370DB',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 25,
		elevation: 2,
		color: DARK_TEXT,
	},

	levelRow: {
		display: "flex",
		flexDirection: "row",
	},

	levelButton: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingRight: 40,
		width: "30%",
	},

	levelBody1: {
		height: 120,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: "100%",
		backgroundColor: "#EF8686",
	},

	levelBody2: {
		height: 120,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: "100%",
		backgroundColor: "#EBAFAF",
	},

	levelBody3: {
		height: 120,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: "100%",
		backgroundColor: "#FFCC99",
	},

	levelBody4: {
		height: 120,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: "100%",
		backgroundColor: "#BCE5C8",
	},

	levelBody5: {
		height: 120,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: "100%",
		backgroundColor: "#B3EFDD",
	},

	levelBody6: {
		height: 120,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: "100%",
		backgroundColor: "#CCCCFF",
	},

	levelText: {
		alignContent: "center",
		justifyContent: "center",
		height: 45,
		fontSize: 24,
		fontWeight: "bold",
	},

	//HELP PAGE
	helpBody: {
		paddingTop: 20,
	},

	input: {
		paddingTop: 20,
		paddingBottom: 20,
		color: "grey",
		fontWeight: "bold",
		fontFamily: "Helvetica",
	},

	textSearch: {
		paddingLeft: 5,
		fontFamily: "Helvetica",
		color: "black",
		backgroundColor: "white",
		height: 40,
		borderWidth: .5,
		borderColor: "black",
		borderRadius: 10,
	},

	submitButton: {
        backgroundColor: "#442981",
        borderRadius: 30,
        justifyContent: "center",
        padding: "1%",
        marginRight: "45%",
        marginLeft: "45%"
	},
	
    submitButtonText: {
		color: 'white',
		fontWeight: "bold",
		fontFamily: "Helvetica",
        alignSelf: "center",
        fontSize: 15,
    },


});

