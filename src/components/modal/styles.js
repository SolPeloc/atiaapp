import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
export const styles = StyleSheet.create({


    modalContainer:{
        justifyContent: "center",
        alignItems:"center",
        marginTop: 50,
        paddingVertical:20,
        backgroundColor:colors.background,
        
      },
      modalTitle:{
        fontSize:18,
        fontFamily:"poppins-bold",
        marginBottom: 10,
      },
      modalDetailContainer:{
        paddingVertical:20,
        justifyContent:"center",
        alignItems:"center"
      },
      
      modalDetailText:{
        fontSize: 14,
        color:colors.black,
        fontFamily:"poppins-regular"
      },
      selectedTask:{
       fontSize: 14,
       color:colors.black,
      fontFamily:"poppins-bold",
       paddingVertical: 20,
      },
      modalButtonContainer:{
        width:"70%",
        flexDirection:"row",
        justifyContent:"space-around",
      },

})