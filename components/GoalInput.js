import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function GoalInput({ onAddGoal }) {
  const [enteredText, setEnteredText] = useState('');

  const addHandler = () => {
    if (enteredText.trim().length === 0) return;
    onAddGoal(enteredText);
    setEnteredText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Ajoute ton objectif..."
          placeholderTextColor="#aaa"
          onChangeText={setEnteredText}
          value={enteredText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addHandler}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5fa',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 15,
    color: '#1a1a2e',
    borderWidth: 1.5,
    borderColor: '#e0e0ec',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#6C3FCF',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6C3FCF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '300',
    lineHeight: 32,
  },
});
