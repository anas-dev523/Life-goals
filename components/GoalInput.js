import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function GoalInput({ onAddGoal }) {
  const [enteredText, setEnteredText] = useState('');

  const addHandler = () => {
    if (enteredText.trim().length === 0) return;
    onAddGoal(enteredText);
    setEnteredText('');
  };

  return (
    <View>
      <TextInput
        placeholder="Ajoute ton objectif"
        onChangeText={setEnteredText}
        value={enteredText}
      />
      <Button title="Ajouter" onPress={addHandler} />
    </View>
  );
}