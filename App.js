// App.js
import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  return (
    <MenuProvider>
      <StackNavigator />
    </MenuProvider>
  );
}


