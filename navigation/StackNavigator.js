// navigation/StackNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from '../screens/Inicio';
import Multiplicar from '../screens/Multiplicar';
import Promedio from '../screens/Promedio';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Multiplicar" component={Multiplicar} />
        <Stack.Screen name="Promedio" component={Promedio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;

