import React from 'react';
import { View, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { AntDesign , FontAwesome } from '@expo/vector-icons';

const SocialIcons = () => {
  const handlePress = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't open URL", err));
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 25, }}>
      <TouchableOpacity style={styles.icons} onPress={() => handlePress('https://www.facebook.com')}>
        <FontAwesome name="facebook" size={24} color="#3b5998" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icons} onPress={() => handlePress('https://x.com')}>
        <AntDesign name="twitter" size={24} color="#1DA1F2" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.icons} onPress={() => handlePress('https://mail.google.com')}>
        <Icon name="mail" size={24} color="#DB4437" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    icons: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#dedede',
        borderRadius: 25,
        height: 40,
        width: 40,
    },
});

export default SocialIcons;
