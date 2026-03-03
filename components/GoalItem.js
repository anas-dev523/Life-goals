import React from 'react';
import { View, Text, StyleSheet, Alert,Button, TouchableOpacity } from 'react-native';
export default function GoalItem({ value, status, onDelete,onStatusChange }){
const alerthandler = (item) =>{
    Alert.alert(
        'Supprimer',
        "tu veux vraimenet supprimer ?",
        [
           { text: 'Annuler' ,style :'cancel'},
           { text: 'Supprimer' , style :'destructive',onPress: onDelete},
        ]
    )

}
return(
    <View style={styles.item}>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity onPress={onStatusChange}><Text style={styles.status}>{status}</Text></TouchableOpacity>
        <Button title="supprimer" onPress={alerthandler} />
    </View>

);}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    flex: 1,
  },
  status: {
    fontSize: 13,
    color: '#8237d8',
    fontWeight: '600',
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: '#f3e8ff',
    borderRadius: 8,
  },
})