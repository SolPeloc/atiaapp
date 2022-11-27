import React from "react";
import { Button,Text,View, Modal} from "react-native";
import colors from "../../constants/colors";
import {styles} from "./styles"
const ModalComponent = ({onHandleCancel, onHandleDeleteItem, selectedTask, modalVisible}) => {
 return (
    <Modal visible={modalVisible}animationType="slide">  
    <View style= {styles.modalContainer}>
                        <Text style = {styles.modalTitle}>Detalle lista de tareas</Text>
                        <View style = {styles.modalDetailContainer}>
                        <Text style = {styles.modalDetailText}>¿estás seguro que quieres eliminar esta tarea?</Text>  
                        <Text style = {styles.selectedTask}>{selectedTask?.value}</Text> 
                    <View style = {styles.modalButtonContainer}>
                        <Button
                        title='cancelar'
                        color= {colors.primary}
                        onPress= {onHandleCancel} //funcion que cancele el modal
                        
                        />
                        <Button
                            title='eliminar'
                            color= {colors.black}
                            onPress = {onHandleDeleteItem} //funcion que borre la tarea
                        />
                    </View>
                    </View>  
                </View>    
        </Modal>  
    )
}
export default ModalComponent
