
import {  View,  ActivityIndicator} from 'react-native';
import { useState } from 'react';
import { styles } from "./styles"
import { AddItem, List, TaskItem } from './components/index.js';
import ModalComponent from './components/modal';
import { useFonts } from 'expo-font';
import { Screen } from './screens';
import colors from "./constants/colors.js"
export default function App() {
  const [loaded] = useFonts({
   "poppins-regular": require("../assets/fonts/Poppins-Regular.ttf"),
   "poppins-bold" : require("../assets/fonts/Poppins-Bold.ttf"),
   "poppins-italic" : require("../assets/fonts/Poppins-Italic.ttf"),
  })
  const [task,setTask]= useState("");//estado del input, de lo que escribimos en él, entonces usamos string//
  const[ taskList, setTaskList]= useState([ ]);// estado de lista , aca el estaria el array de los inputs u objeto de los inputs//
  const [modalVisible,setmodalVisible] = useState(false); //estado de visualizacion del modal, como inicio, no se vera por eso false
  const [selectedTask,setselectedTask] = useState(); //estado de elemento seleccionado

  const onHandleTask = () => {
  setTaskList((prevTaskList) => [ ...prevTaskList,{id: Math.random().toString(), value:task}]);//setear la lista, con un id unico y el valor
  setTask("");                               
 }

 const onHandleSelected = (item) => {
   setmodalVisible(true),
   setselectedTask(item)
 }


 const renderItem = ({item}) => (
  <TaskItem item = {item} onHandleSelected ={onHandleSelected}/>
 )
     
 

 const onHandleCancel = () => {
    setmodalVisible(!modalVisible)             
 }
 const onHandleDeleteItem = () => {
 setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
 setmodalVisible(!modalVisible)
 
 }
 const onHandleChange = (text) => setTask(text);
 if (!loaded){ 
  return(
     <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.primary}/>
  </View> )
   
 }
 deleteAll= () =>{
  setTaskList("")
      
  }
    
  

  return (
    < > 
          <AddItem task={task} onHandleTask={onHandleTask} onHandleChange = {onHandleChange}/>
          <List taskList={taskList} renderItem={renderItem} onHandleChange={onHandleChange} deleteAll={deleteAll}/> 
          <ModalComponent modalVisible={modalVisible} selectedTask={selectedTask} onHandleCancel={onHandleCancel} onHandleDeleteItem = {onHandleDeleteItem}/>
           
  </>         
  );
}
