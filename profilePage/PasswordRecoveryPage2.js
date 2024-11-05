import { React, useState } from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const PasswordRecoveryPage2 = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.pageTitle}> 
          Recover Your Password
        </Text>
        <View style={styles.thirdContainer}>
          <TextInput 
            style={styles.textInput} 
            mode='outlined'
            label="Email" 
            value={code} 
            onChangeText={code => setCode(code)}   
            activeOutlineColor="#00C851"
          />

          <TextInput 
            style={styles.textInput} 
            mode='outlined'
            label="New Password" 
            value={password} 
            onChangeText={password => setPassword(password)}   
            activeOutlineColor="#00C851"
          />

          <TextInput 
            style={styles.textInput} 
            mode='outlined'
            label="Confirm New Password" 
            value={passwordConfirmation} 
            onChangeText={passwordConfirmation => setPasswordConfirmation(passwordConfirmation)}   
            activeOutlineColor="#00C851"
          />

          <Button 
            style={styles.button}
            mode="contained" 
            onPress={() => navigation.navigate('PasswordRecoverySuccessfulPage')}
            buttonColor='#00C851'
          >
            S E T   P A S S W O R D
          </Button>

          <View style={styles.redirectPage}> 
            <Pressable onPress={() => navigation.navigate('Login')} >
              <Text style={styles.redirectPageTextLink}>Login with password</Text>
            </Pressable> 
          </View>
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
    paddingHorizontal: 40,
    paddingTop: 20, 
  },
  smallText: {
    color: '#a6a6a6',
    fontWeight: '600',
    fontSize: 16,
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
  rememberMeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch', 
  },
  rememberMeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  switchLabel: {
    color: '#a6a6a6',
    fontSize: 14,
    marginLeft: 5,
  },
  forgotPasswordText: {
    color: '#00C851',
    fontSize: 16,
  },
  redirectPage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  redirectPageText: {
    fontSize: 14,
    color: '#a6a6a6',
  },
  redirectPageTextLink: {
    color: '#00C851',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default PasswordRecoveryPage2;
