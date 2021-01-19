import { StyleSheet, Dimensions } from "react-native";

const PURPLE_TEXT = "#5341AF";
const DARK_TEXT = "#222151";
const WHITE = "#F9F9FB";
const OFF_WHITE = "#FFFFFF";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

export default StyleSheet.create({

    // TAB NAVIGATION
    tabButton: {
		paddingTop: 20,
		paddingBottom: 30,
		alignItems: "center",
		justifyContent: "center",
		flex: 1
	},

    // SCREENS - ALL
	container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
		resizeMode: "cover",
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
    },
    title: { 
        paddingBottom: 10, fontSize: 24, color: DARK_TEXT
	},

});

