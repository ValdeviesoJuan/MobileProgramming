import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const PageTitle = ({ onPress, title}) => {
  return (
    <View style={styles.titleComponent}>
        <TouchableOpacity 
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.backIcon}
        >
            <Ionicons name="chevron-back-circle" size={36} color="#e3e3e3" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titleComponent: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 35,
        marginBottom: 20,
        position: 'relative',
    },
    backIcon: {
        position: 'absolute',
        left: 0,
    },
    title: {
        fontWeight: 'semi-bold',
        fontSize: 20,
    },
});

export default PageTitle