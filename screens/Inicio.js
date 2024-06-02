// screens/Inicio.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Menu>
          <MenuTrigger>
            <Icon name="menu" size={30} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => navigation.navigate('Multiplicar')} text="Multiplicar" />
            <MenuOption onSelect={() => navigation.navigate('Promedio')} text="Promedio" />
          </MenuOptions>
        </Menu>
      </View>
      <Image source={require('../assets/imagen_liam.jpg')} style={styles.image} />
      <Text style={styles.text}>Liam Jimenez</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 24,
    margin: 10,
  },
});



