import { View, Text } from 'react-native';
import { Stack } from 'expo-router/stack';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack
          initialRouteName="recover"
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
          >
          <Stack.Screen name="index" />
          <Stack.Screen name="register" />
          <Stack.Screen name="recover" options={{ 
            headerShown: true,
            title: "Forgot Password" }}/>
          <Stack.Screen name="dashboard"
            options={{
              title: "Dashboard",
              headerShown: false,
            }}

          />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  )
}

export default RootLayout