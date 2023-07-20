import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const onButtonPress = (value) => {
    if (value === '=') {
      setResult(eval(input));
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const renderButton = (value) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onButtonPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputbox}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          {['7', '8', '9', '/'].map((value) => renderButton(value))}
        </View>
        <View style={styles.buttonRow}>
          {['4', '5', '6', '*'].map((value) => renderButton(value))}
        </View>
        <View style={styles.buttonRow}>
          {['1', '2', '3', '-'].map((value) => renderButton(value))}
        </View>
        <View style={styles.buttonRow}>
          {['0', 'C', '=', '+'].map((value) => renderButton(value))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  resultText: {
    fontSize: 40,
  },
  input: {
    fontSize: 30,
  },
  inputbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 4,
    padding: 10,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 24,
  },
});
