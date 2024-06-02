// screens/Multiplicar.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function Multiplicar() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState([]);

  const handleMultiply = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      return;
    }
    const multiplicationTable = Array.from({ length: 14 }, (_, i) => `${num} x ${i + 1} = ${num * (i + 1)}`);
    setResult(multiplicationTable);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ingrese un número"
        value={number}
        onChangeText={setNumber}
      />
      <Button title="Mostrar Tabla" onPress={handleMultiply} />
      {result.length > 0 && (
        <View style={styles.result}>
          {result.map((res, index) => (
            <Text key={index} style={styles.text}>{res}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: '80%',
    textAlign: 'center',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});



