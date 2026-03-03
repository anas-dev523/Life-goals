import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList,StyleSheet, Text, View,TextInput } from 'react-native';
import GoalInput from './components/GoalInput';

export default function App() {
  const[Goals,setGoals]=useState([]);
  const addGoalHandler = (goalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { 
        id: Math.random().toString(),
        value: goalText, 
        status: 'En cours' 
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
