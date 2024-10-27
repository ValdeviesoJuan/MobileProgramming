import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View>
      <Text>SearchBar</Text>
      <TextInput 
            style={styles.input} 
            placeholder={'Search a Task'} 
          />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
});
export default SearchBar