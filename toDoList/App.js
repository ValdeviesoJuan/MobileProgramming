import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddtask  = () => {
    if (isEditing) {
      let updatedTasks = [...taskItems];  
      updatedTasks[selectedTaskIndex] = task;
      setTaskItems(updatedTasks);
      setIsEditing(false); // Exit edit mode
      setSelectedTaskIndex(null);
    } else {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
    }
    setTask(null);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    setSelectedTaskIndex(null);
    setIsEditing(false);
  }

  const exitSelectedMode = () => {
    setSelectedTaskIndex(null);
    setIsEditing(false);
    setTask(null);
  };

  const handleLongPress = (index) => {
    setSelectedTaskIndex(index); 
    setTask(taskItems[index]); 
    setIsEditing(true); 
  };

  return (
    <View style={styles.container}>
    
      {selectedTaskIndex !== null && (
        <TouchableOpacity 
          style={styles.crossButton} 
          onPress={() => exitSelectedMode()}
        >
          <Ionicons name="close-outline" size={30} color="black" />
        </TouchableOpacity>
      )}

      {/* Whole Tasks Section */} 
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tasks </Text>
        
        <View style={styles.items}>
          {/*List all tasks here*/}
          {taskItems.map((item, index) => {
              return ( 
                <TouchableOpacity 
                  key={index} 
                  onPress={() => setSelectedTaskIndex(index)}
                  onLongPress={() => handleLongPress(index)}>
                    <Task 
                    text={item}
                    index={index}
                    selectedTaskIndex={selectedTaskIndex}
                    />
                </TouchableOpacity>
              )
          })}
        </View>
      </View>

      {(selectedTaskIndex === null || isEditing) && (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}
        >
          <TextInput 
            style={styles.input} 
            placeholder={isEditing ? 'Edit Task' : 'Write a Task'} 
            value={task} 
            onChangeText={text => setTask(text)} 
          />
          <TouchableOpacity onPress={() => handleAddtask()}>
            <View style={styles.addWrapper}>
              <Ionicons 
                name={isEditing ? "pencil-outline" : "add"}
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      )}

      {selectedTaskIndex !== null && !isEditing && (
        <View style={styles.deleteWrapper}>
          <TouchableOpacity onPress={() => deleteTask(selectedTaskIndex)}>
            <Ionicons name="trash-outline" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.deleteText}>Delete</Text>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', 
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 20,
  },
  deleteWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    backgroundColor: '#fff', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    fontSize: 12,
    color: 'black',
  },
  crossButton: {
    position: 'absolute',
    top: 40, 
    right: 20,
    zIndex: 1,
  },
});