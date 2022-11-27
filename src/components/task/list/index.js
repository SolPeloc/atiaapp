import React from "react";
import { FlatList, View, Text } from "react-native";
import {styles} from "../list/styles.js"

const List = ({taskList,renderItem}) =>{

    return(
        <View style={styles.container}>
                <View style={styles.listContainer}>
                <Text style={styles.listTitle}>lista completa</Text>
                </View> 
                <FlatList 
                    style= {styles.listContainer}
                    data = {taskList} 
                    renderItem = {renderItem} //componente a renderizar
                    keyExtractor={item => item.id} //por cada uno de los item, le paso el id
                />
                
         </View>  
    )
}

export default List;