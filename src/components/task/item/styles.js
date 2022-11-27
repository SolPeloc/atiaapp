import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export const styles = StyleSheet.create({

    listItemContainer:{
        marginVertical:5,
        paddingVertical: 20,
        backgroundColor: colors.white,
        borderRadius:5,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 5,
        justifyContent:"center",
    }, 
    listItem:{
        fontSize:14,
        color:colors.black,
        paddingHorizontal:10,
        fontFamily: "poppins-regular"
    },

})