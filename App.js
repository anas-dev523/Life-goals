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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mes Objectifs</Text>
        <Text style={styles.headerCount}>
          {Goals.length} objectif{Goals.length !== 1 ? 's' : ''}
        </Text>
      </View>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        data={Goals}
        renderItem={({ item }) => (
          <GoalItem
            value={item.value}
            status={item.status}
            onDelete={() => handleDelete(item.id)}
            onStatusChange={() => handleStatusChange(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    paddingTop: 55,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 18,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#1a1a2e',
    letterSpacing: 0.3,
  },
  headerCount: {
    fontSize: 14,
    color: '#8a8a9a',
    marginTop: 4,
    fontWeight: '500',
  },
  listContent: {
    paddingBottom: 12,
    flexGrow: 1,
  },
});
