import { React, useState } from 'react';
import { View, Text, StyleSheet, Pressable  } from 'react-native';
import { TextInput, Button, Switch } from 'react-native-paper';
import SocialIcons from './components/SocialIcons';
import { MaterialIcons } from '@expo/vector-icons';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.pageTitle}> 
          Login to your account
        </Text>
        <View style={styles.thirdContainer}>
          <SocialIcons />
          <Text style={styles.smallText}>or use your email account</Text>
          <TextInput 
            style={styles.textInput} 
            mode='outlined'
            label="Email" 
            value={email} 
            onChangeText={email => setEmail(email)}   
            activeOutlineColor="#00C851"
          />

          <TextInput 
            style={styles.textInput} 
            mode='outlined'
            label="Password" 
            value={password} 
            onChangeText={password => setPassword(password)}
            secureTextEntry={!showPassword} 
            activeOutlineColor="#00C851"
            right={
                <TextInput.Icon
                    icon={() => (
                        <MaterialIcons
                            name={showPassword ? 'visibility' : 'visibility-off'}
                            size={24}
                            onPress={() => setShowPassword(!showPassword)}
                        />
                    )}
                />
            }
          />

          <View style={styles.rememberMeButton}>
            <View style={styles.rememberMeGroup}>
              <Switch 
                value={isSwitchOn} 
                onValueChange={onToggleSwitch} 
                color='#00C851'
              />
              <Text style={styles.switchLabel}>
                Remember Me
              </Text>
            </View>
            <Pressable onPress={() => navigation.navigate('PasswordRecoveryPage')} >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </Pressable>
          </View>

          <Button 
            style={styles.button}
            mode="contained" 
            onPress={() => navigation.navigate('UserPage')}
            buttonColor='#00C851'
          >
            L O G I N
          </Button>

          <View style={styles.redirectPage}> 
            <Text style={styles.redirectPageText}>
                Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate('RegisterPage')} >
              <Text style={styles.redirectPageTextLink}>Register here</Text>
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
    marginTop: 150,
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

export default LoginPage;
