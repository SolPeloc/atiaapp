import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    listItemContainer:{
        marginVertical:5,
        paddingVertical: 20,
        backgroundColor: "#ffff",
        borderRadius:5,
        shadowColor: "#000",
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
        color:"#00000",
        paddingHorizontal:10,
    },

})