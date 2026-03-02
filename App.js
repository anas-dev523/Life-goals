import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList,StyleSheet, Text, View,TextInput } from 'react-native';
import GoalInput from './.expo/components/Goalinput';
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
export default function App() {
  const[Goals,setGoals]=useState([]);
  const [text,setText]=useState('')
  return (
    <View style={styles.container}>
      <TextInput
        value ={text}
        onChangeText={setText}
        placeholder="Ajout ton objectif"
        style={{ borderWidth: 1, padding: 8, width: '50%' }}
      />
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
