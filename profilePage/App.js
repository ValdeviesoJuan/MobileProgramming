import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage'; 
import UserPage from './UserPage';   
import RegisterPage from './RegisterPage'; 
import PasswordRecoveryPage from './PasswordRecoveryPage';
import PasswordRecoveryPage2 from './PasswordRecoveryPage2';
import PasswordRecoverySuccessfulPage from './PasswordRecoverySuccessfulPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} options={{headerTitleAlign: 'center', headerShown: true }}/>
        <Stack.Screen name="UserPage" component={UserPage} options={{title: "Profile", headerTitleAlign: 'center' }}/>
        <Stack.Screen name="RegisterPage" component={RegisterPage} options={{title: "Register", headerTitleAlign: 'center', headerShown: true }}/>
        <Stack.Screen name="PasswordRecoveryPage" component={PasswordRecoveryPage} options={{title: "Password Recovery", headerTitleAlign: 'center' }}/>
        <Stack.Screen name="PasswordRecoveryPage2" component={PasswordRecoveryPage2} options={{title: "Password Recovery", headerTitleAlign: 'center' }}/>
        <Stack.Screen name="PasswordRecoverySuccessfulPage" component={PasswordRecoverySuccessfulPage} options={{title: "Password Recovery Successful", headerTitleAlign: 'center', headerLeft: () => null,  headerShown: true }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
