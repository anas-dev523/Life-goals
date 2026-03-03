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
  const nextStatus ={
    'En cours': 'Terminé',
    'Terminé': 'Abandonné',
    'Abandonné': 'En cours',
  }
  const handleStatusChange = (id) => {
  setGoals(currentGoals =>
    currentGoals.map(goal =>
      goal.id === id ? { ...goal, status: nextStatus[goal.status] } : goal
    )
  );
};
  return (
    <View style={styles.container}>
      <FlatList  
      data={Goals}
      renderItem={({ item }) => (
     <GoalItem value={item.value} status={item.status} 
     onDelete={() => handleDelete(item.id)} 
     onStatusChange={() => handleStatusChange(item.id)}
/>
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
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
  },
});
