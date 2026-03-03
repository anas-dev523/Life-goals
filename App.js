import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList,StyleSheet, Text, View,TextInput } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

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
  const handleDelete = (id) => {
    setGoals(currentGoals => currentGoals.filter(item => item.id !== id));
  }
  return (
    <View style={styles.container}>
      <FlatList  
      data={Goals}
      renderItem={({ item }) => (
     <GoalItem value={item.value} status={item.status} onDelete={() => handleDelete(item.id)} />
      )}
      keyExtractor={(item) => item.id}
      />
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
