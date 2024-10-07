import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const ProfileOptions = ({ onPress, title, icon, color = 'black' }) => {
  return (
    <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.4}
        style={styles.menu}
    >
        <View style={styles.menuItem}>
            <Ionicons name={icon} size={24} color={color} />
            <Text style={[styles.menuText, { color: color }]}>{title}</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={color} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 5,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        marginLeft: 15,
        fontSize: 16,
    },
});

export default ProfileOptions;