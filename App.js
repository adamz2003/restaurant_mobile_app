import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './src/start';
import Login from './src/login';
import Main from './src/main';
import DataContextProvider from './src/context/dataContext';
import FilterContextProvider from './src/context/filterContext';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <DataContextProvider>
      <FilterContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Start} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </FilterContextProvider>
    </DataContextProvider>
  );
}