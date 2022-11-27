import React from "react";
import { styles } from "./styles.js"
import { View, Button, TextInput } from "react-native";
 import colors from "../../constants/colors"
const AddItem = ({task,onHandleTask, onHandleChange}) =>{
   return (
            <View style={styles.inputContainer}>
                    <TextInput style={styles.input}
                            value={task}     
                            placeholder="Enter task"  
                            onChangeText={onHandleChange}      
                            />  
                    <Button disabled={!task}title='add' color={colors.black} onPress={onHandleTask}/> 
                </View> 
        )
}

export default AddItem;