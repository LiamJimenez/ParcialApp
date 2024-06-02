// screens/Promedio.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function Promedio() {
  const [numbers, setNumbers] = useState({ num1: '', num2: '', num3: '' });
  const [result, setResult] = useState({ min: null, max: null, avg: null });

  const handleCalculate = () => {
    const num1 = parseFloat(numbers.num1);
    const num2 = parseFloat(numbers.num2);
    const num3 = parseFloat(numbers.num3);
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      return;
    }
    const min = Math.min(num1, num2, num3);
    const max = Math.max(num1, num2, num3);
    const avg = (num1 + num2 + num3) / 3;
    setResult({ min, max, avg });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 1"
        value={numbers.num1}
        onChangeText={(text) => setNumbers({ ...numbers, num1: text })}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 2"
        value={numbers.num2}
        onChangeText={(text) => setNumbers({ ...numbers, num2: text })}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Número 3"
        value={numbers.num3}
        onChangeText={(text) => setNumbers({ ...numbers, num3: text })}
      />
      <Button title="Calcular" onPress={handleCalculate} />
      {result.min !== null && (
        <View style={styles.result}>
          <Text style={styles.text}>Mínimo: {result.min}</Text>
          <Text style={styles.text}>Máximo: {result.max}</Text>
          <Text style={styles.text}>Promedio: {result.avg.toFixed(2)}</Text>
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

