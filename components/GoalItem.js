import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoalItem({value,status}){

return(
    <View style={styles.item}>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.status}>{status}</Text>
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