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
        item:{
            backgroundColor: '#c0fa8a',
            padding: 12,
        },
         value: {
             fontSize: 16,
            fontWeight: 'bold',
        },
        status: {
            fontSize: 14,
            color: '#8237d8',
  },

})