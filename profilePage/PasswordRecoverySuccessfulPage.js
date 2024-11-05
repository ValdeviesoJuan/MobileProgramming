import { React, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const PasswordRecoverySuccessfulPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.pageTitle}> 
          Forget Password
        </Text>
        <View style={styles.thirdContainer}>
            <Image style={styles.successfulMessageImage} source={require('./assets/password-reset.png')} />
            <Text style={styles.successfulMessageTitle}>Password Reset</Text>
            <Text style={styles.successfulMessageText}>Your password has been reset successfully</Text>
            <Button 
                style={styles.button}
                mode="contained" 
                onPress={() => navigation.navigate('Login')}
                buttonColor='#00C851'
            >
                G O   T O   L O G I N
            </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  secondContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#00C851',
    marginTop: 100,
  },
  pageTitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
    marginVertical: 15,
    textAlign: 'center',
  },
  thirdContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 20, 
  },
  successfulMessageImage: {
    height: 150,
    width: 150,
    marginVertical: 25,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  successfulMessageTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  successfulMessageText: {
    color: '#a6a6a6',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  textInput: {
    marginTop: 25,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 25,
    paddingVertical: 5,
    color: '#00C851'
  },
});

export default PasswordRecoverySuccessfulPage;
