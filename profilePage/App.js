import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage'; 
import UserPage from './UserPage';   
import RegisterPage from './RegisterPage'; 
import PasswordRecoveryPage from './PasswordRecoveryPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{headerTitleAlign: 'center' }}/>
        <Stack.Screen name="UserPage" component={UserPage} options={{title: "Profile", headerTitleAlign: 'center' }}/>
        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{title: "Register", headerTitleAlign: 'center' }}/>
        <Stack.Screen name="PasswordRecoveryPage" component={PasswordRecoveryPage} options={{title: "Password Recovery", headerTitleAlign: 'center' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
