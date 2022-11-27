import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


export const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:20,
        marginVertical: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      input:{
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
      },


})